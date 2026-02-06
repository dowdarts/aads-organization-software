import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getAllContacts = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const contact = await prisma.contact.findUnique({ where: { id: req.params.id } });
    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const contact = await prisma.contact.create({ data: req.body });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const contact = await prisma.contact.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await prisma.contact.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};
