"use client";

import prisma from '../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Card } from '@/app/ui/dashboard/cards';
import { inter } from '@/app/ui/fonts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let results = await prisma.folders.findMany();
  return <main>
           <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
             Dashboard
           </h1>
           <div className={`${inter.className} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
             {<Card
               title="Total Folders"
               value={results.length}
               type="customers"
             />}
           </div>
         </main>
}
