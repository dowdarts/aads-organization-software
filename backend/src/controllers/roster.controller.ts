import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getAllRosters = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const rosters = await prisma.roster.findMany({
      include: { event: true, player: true }
    });
    res.json({ success: true, data: rosters });
  } catch (error) {
    next(error);
  }
};

export const getRostersByEvent = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const rosters = await prisma.roster.findMany({
      where: { eventId: req.params.eventId },
      include: { player: true }
    });
    res.json({ success: true, data: rosters });
  } catch (error) {
    next(error);
  }
};

export const createRoster = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const roster = await prisma.roster.create({ data: req.body });
    res.status(201).json({ success: true, data: roster });
  } catch (error) {
    next(error);
  }
};

export const updateRoster = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const roster = await prisma.roster.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json({ success: true, data: roster });
  } catch (error) {
    next(error);
  }
};

export const deleteRoster = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await prisma.roster.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Roster deleted successfully' });
  } catch (error) {
    next(error);
  }
};
