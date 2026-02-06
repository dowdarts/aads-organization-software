import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getAllForms = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const forms = await prisma.form.findMany({
      include: {
        creator: { select: { id: true, firstName: true, lastName: true } },
        _count: { select: { responses: true } }
      }
    });
    res.json({ success: true, data: forms });
  } catch (error) {
    next(error);
  }
};

export const getFormById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const form = await prisma.form.findUnique({
      where: { id: req.params.id },
      include: { creator: { select: { id: true, firstName: true, lastName: true } } }
    });
    res.json({ success: true, data: form });
  } catch (error) {
    next(error);
  }
};

export const createForm = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const form = await prisma.form.create({
      data: { ...req.body, createdBy: req.user!.id }
    });
    res.status(201).json({ success: true, data: form });
  } catch (error) {
    next(error);
  }
};

export const updateForm = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const form = await prisma.form.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json({ success: true, data: form });
  } catch (error) {
    next(error);
  }
};

export const deleteForm = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await prisma.form.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Form deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const submitFormResponse = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const response = await prisma.formResponse.create({
      data: {
        formId: req.params.id,
        respondentId: req.user?.id,
        ...req.body
      }
    });
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    next(error);
  }
};

export const getFormResponses = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const responses = await prisma.formResponse.findMany({
      where: { formId: req.params.id },
      include: { respondent: { select: { id: true, firstName: true, lastName: true } } }
    });
    res.json({ success: true, data: responses });
  } catch (error) {
    next(error);
  }
};
