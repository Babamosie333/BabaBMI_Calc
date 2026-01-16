"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    { label: "Underweight", range: "< 18.5", info: "A BMI less than 18.5 indicates that you are underweight, so you may need to put on some weight.", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Normal", range: "18.5 – 24.9", info: "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height.", color: "text-green-600", bg: "bg-green-50" },
    { label: "Overweight", range: "25 – 29.9", info: "A BMI of 25-29.9 indicates that you are slightly overweight.", color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Obese", range: "30 or more", info: "A BMI of 30 or more indicates that you are heavily overweight.", color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-slate-500 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4" /> Back to Calculator
          </Button>
        </Link>

        <header className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">BMI Categories</h1>
          <p className="text-slate-500 font-medium">Understanding your Body Mass Index results.</p>
        </header>

        <div className="grid gap-6">
          {categories.map((cat) => (
            <Card key={cat.label} className="border-none shadow-lg bg-white/80 backdrop-blur-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className={`text-xl font-bold ${cat.color}`}>{cat.label}</CardTitle>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${cat.bg} ${cat.color}`}>
                  {cat.range}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{cat.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="bg-slate-900 rounded-3xl p-8 text-white space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold uppercase tracking-widest text-xs">Medical Note</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            While BMI is a useful screening tool, it does not directly measure body fat or account for muscle mass, bone density, or overall body composition. Always consult with a healthcare professional for a complete health assessment.
          </p>
        </section>
      </div>
    </main>
  );
}
