import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getAllSponsors = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const sponsors = await prisma.sponsor.findMany({
      include: {
        scout: { select: { id: true, firstName: true, lastName: true } },
        _count: { select: { eventSponsors: true } }
      }
    });
    res.json({ success: true, data: sponsors });
  } catch (error) {
    next(error);
  }
};

export const getSponsorById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const sponsor = await prisma.sponsor.findUnique({
      where: { id: req.params.id },
      include: { eventSponsors: { include: { event: true } } }
    });
    res.json({ success: true, data: sponsor });
  } catch (error) {
    next(error);
  }
};

export const createSponsor = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const sponsor = await prisma.sponsor.create({
      data: { ...req.body, scoutedBy: req.user!.id }
    });
    res.status(201).json({ success: true, data: sponsor });
  } catch (error) {
    next(error);
  }
};

export const updateSponsor = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const sponsor = await prisma.sponsor.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json({ success: true, data: sponsor });
  } catch (error) {
    next(error);
  }
};

export const deleteSponsor = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await prisma.sponsor.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Sponsor deleted successfully' });
  } catch (error) {
    next(error);
  }
};
