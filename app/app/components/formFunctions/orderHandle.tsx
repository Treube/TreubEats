
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form,FormField, FormItem,FormMessage, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import Link from "next/link"

import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';
import styles from '../dashboard/dashboard.module.css';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

const formSchema = z.object({
    meal: z.string(),
    amount: z.coerce.number()
  });

async function handleOrder(formData: z.infer<typeof formSchema>){
    const orderData = {
        meal: formData.meal as string,
        amount: formData.amount as number,
      } 
    
    
    
    //   const incomeU = await prisma.orderItem.create({
    //     data: {
    //         quantity: orderData.amount
    //     },
       
       
        
      });
}
