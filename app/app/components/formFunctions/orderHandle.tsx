
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

const formSchema = z.object({
    meal: z.string(),
    amount: z.coerce.number()
  });

function handleOrder(formData: z.infer<typeof formSchema>){
    const orderData = {
        meal: formData.meal as string,
        amount: formData.amount as number,
      } 
    
    
    
      const incomeU = await prisma.income.create({
        data: {
            userId: user,
            source: IncomeData.source,
            freq: IncomeData.freq,
            amount: IncomeData.amount
        },
       
        
      });
}
