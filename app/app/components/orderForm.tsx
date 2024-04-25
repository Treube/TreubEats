'use client'
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

function handleOrder(formData: z.infer<typeof formSchema>){
    const orderData = {
        meal: formData.meal as string,
        amount: formData.amount as number,
      } 
    
    
    
      const incomeU = await prisma.orderitem.create({
        data: {

            quantity: orderData.amount
        },
       
        
      });
}



export default function OrderForm(){

    const formSchema = z.object({
        id: z.coerce.number(),
       
        meal: z.string().min(1, {message: "Required"}),
        amount: z.coerce.number().min(1, {message: "More than 0"})

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
            meal: "",
            amount: 0,
        }
      });
    const handleSubmit = (values: z.infer<typeof formSchema>) => {console.log("lmao")};
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className = "rounded-full">
          
        
          <FormField control = {form.control} name = "meal" render = {({field}) => {
            return <FormItem>
              <FormLabel>Meal </FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "Meal Name" type = "text" {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "How many of this meal do you want?" type="number"  {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <br></br>
          <Button type = "submit" className = "w-full">Place Order!</Button>
        </form>

      </Form>
    )
}