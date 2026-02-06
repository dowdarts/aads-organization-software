import { Response, NextFunction } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';

export const getAllPlayers = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 20, status, skillLevel } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (status) where.status = status;
    if (skillLevel) where.skillLevel = skillLevel;

    const [players, total] = await Promise.all([
      prisma.player.findMany({
        where,
        skip,
        take: Number(limit),
        include: {
          scout: {
            select: { id: true, firstName: true, lastName: true }
          },
          _count: {
            select: { rosters: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.player.count({ where })
    ]);

    res.json({
      success: true,
      data: players,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getPlayerById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const player = await prisma.player.findUnique({
      where: { id },
      include: {
        scout: {
          select: { id: true, firstName: true, lastName: true }
        },
        rosters: {
          include: {
            event: true
          }
        }
      }
    });

    if (!player) {
      throw new AppError('Player not found', 404);
    }

    res.json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

export const createPlayer = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const player = await prisma.player.create({
      data: {
        ...req.body,
        scoutedBy: req.user!.id
      }
    });

    res.status(201).json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

export const updatePlayer = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const player = await prisma.player.update({
      where: { id },
      data: req.body
    });

    res.json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

export const deletePlayer = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await prisma.player.delete({ where: { id } });

    res.json({ success: true, message: 'Player deleted successfully' });
  } catch (error) {
    next(error);
  }
};
