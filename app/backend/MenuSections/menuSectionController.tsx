import * as menuSectionService from './menuSectionService' ;
import 'next';
import { NextApiRequest, NextApiResponse } from 'next';

export const createMenuSection = async(req: NextApiRequest , res: NextApiResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const {name, items} = req.body

    if (!name || !items) {
        return res.status(400).json({ message: 'There are missing entries are required' });
      }

    const newMenuSection = await menuSectionService.createMenuSection(name, items)

    // respond with the created review
    res.status(201).json(newMenuSection);

};

export const updateMenuSection = async(req: NextApiRequest , res: NextApiResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const {sectionId, name, items} = req.body

    if (!sectionId || !name || !items) {
        return res.status(400).json({ message: 'There are missing entries are required' });
      }

    const updateMenuSection = await menuSectionService.updateMenuSection(sectionId, name, items)

    // respond with the updated section
    res.status(201).json(updateMenuSection);

};

export const deleteMenuSection = async(req: NextApiRequest , res: NextApiResponse) => {
  // ensure that body has a userid and sectionid
  // retrieve userid and sectionid from req
  const {userId, sectionId} = req.body

  if (!userId || !sectionId) {
    return res.status(400).json({ message: 'There are missing entries are required' });
  }

  const deletedMenuSection = await menuSectionService.deleteMenuSection(userId, sectionId)

  // respond with the deleted menu section
  res.status(201).json(deletedMenuSection);

};