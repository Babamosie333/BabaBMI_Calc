"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Calculator, RefreshCw, ChevronRight, Activity, Weight, Ruler,Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type UnitSystem = "metric" | "imperial";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  description: string;
  range: [number, number];
}

const CATEGORIES = [
  { name: "Underweight", range: [0, 18.5], color: "text-blue-500 bg-blue-500/10", border: "border-blue-500", desc: "You may need to focus on nutritional intake." },
  { name: "Normal", range: [18.5, 25], color: "text-emerald-500 bg-emerald-500/10", border: "border-emerald-500", desc: "You are within a healthy weight range." },
  { name: "Overweight", range: [25, 30], color: "text-amber-500 bg-amber-500/10", border: "border-amber-500", desc: "Consider maintaining a balanced diet and exercise." },
  { name: "Obese", range: [30, 100], color: "text-rose-500 bg-rose-500/10", border: "border-rose-500", desc: "It's recommended to consult a health professional." },
];

export function BMICalculator() {
  const [unit, setUnit] = React.useState<UnitSystem>("metric");
  const [weight, setWeight] = React.useState<string>("");
  const [height, setHeight] = React.useState<string>("");
  const [feet, setFeet] = React.useState<string>("");
  const [inches, setInches] = React.useState<string>("");
  const [result, setResult] = React.useState<BMIResult | null>(null);

  const calculateBMI = () => {
    let weightKg = 0;
    let heightM = 0;

    if (unit === "metric") {
      weightKg = parseFloat(weight);
      heightM = parseFloat(height) / 100;
    } else {
      weightKg = parseFloat(weight) * 0.453592;
      const totalInches = (parseFloat(feet) * 12) + (parseFloat(inches) || 0);
      heightM = totalInches * 0.0254;
    }

    if (weightKg > 0 && heightM > 0) {
      const bmi = weightKg / (heightM * heightM);
      const category = CATEGORIES.find(c => bmi >= c.range[0] && bmi < c.range[1]) || CATEGORIES[3];
      
      setResult({
        bmi: parseFloat(bmi.toFixed(1)),
        category: category.name,
        color: category.color,
        description: category.desc,
        range: category.range as [number, number]
      });
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setFeet("");
    setInches("");
    setResult(null);
  };

  const isFormValid = unit === "metric" 
    ? parseFloat(weight) > 0 && parseFloat(height) > 0 
    : parseFloat(weight) > 0 && (parseFloat(feet) > 0 || parseFloat(inches) > 0);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="inline-flex items-center justify-center p-2 mb-4 rounded-2xl bg-slate-900 text-white shadow-lg">
          <Activity className="w-5 h-5 mr-2" />
          <span className="font-bold tracking-tight text-sm">BabaBMI Cal</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
          Precision <span className="text-blue-600">Body Metrics</span>
        </h1>
        <p className="text-slate-500 max-w-[600px] mx-auto text-lg font-medium">
          A professional-grade BMI calculator designed for accuracy and clarity [file:6]. 
          Track your health journey with scientific precision.
        </p>
      </motion.div>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="h-full border-none shadow-2xl bg-white/70 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Your Measurements
              </CardTitle>
              <CardDescription>Select your unit system and enter your details [file:6].</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={unit} onValueChange={(v) => setUnit(v as UnitSystem)} className="w-full">
                <TabsList className="grid w-full grid-cols-2 p-1 bg-slate-100 rounded-lg">
                  <TabsTrigger value="metric">Metric</TabsTrigger>
                  <TabsTrigger value="imperial">Imperial</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-400">
                    <Weight className="w-4 h-4" /> Weight ({unit === "metric" ? "kg" : "lbs"})
                  </Label>
                  <Input 
                    type="number" 
                    placeholder={unit === "metric" ? "70" : "154"} 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {unit === "metric" ? (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-400">
                      <Ruler className="w-4 h-4" /> Height (cm)
                    </Label>
                    <Input 
                      type="number" 
                      placeholder="175" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="h-12 bg-white border-slate-200"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-400">
                        <Ruler className="w-4 h-4" /> Height (ft)
                      </Label>
                      <Input type="number" placeholder="5" value={feet} onChange={(e) => setFeet(e.target.value)} className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-xs uppercase tracking-wider text-slate-400">Height (in)</Label>
                      <Input type="number" placeholder="9" value={inches} onChange={(e) => setInches(e.target.value)} className="h-12" />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button onClick={calculateBMI} disabled={!isFormValid} className="flex-1 h-12 bg-slate-900 text-white hover:bg-black transition-all">
                Calculate BMI
              </Button>
              <Button variant="outline" size="icon" onClick={reset} className="h-12 w-12"><RefreshCw className="w-5 h-5" /></Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <AnimatePresence mode="wait">
            {!result ? (
              <Card className="h-full border-dashed border-slate-200 bg-transparent flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="p-4 rounded-full bg-slate-100"><Calculator className="w-8 h-8 text-slate-400" /></div>
                <h3 className="text-xl font-bold text-slate-900">Results Preview</h3>
                <p className="text-slate-500 text-sm">Enter your details to see your BMI analysis [file:5].</p>
              </Card>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full">
                <Card className="h-full border-none shadow-2xl bg-white/70 backdrop-blur-xl overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500" />
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>BMI Results</CardTitle>
                    <Badge className={`capitalize ${result.color} border-none`}>{result.category}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="flex flex-col items-center justify-center py-6">
                      <span className="text-8xl font-black tracking-tighter text-slate-900">{result.bmi}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Body Mass Index</span>
                    </div>
                    <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                      <div className="h-full w-[18.5%] bg-blue-500" /><div className="h-full w-[6.5%] bg-emerald-500" />
                      <div className="h-full w-[5%] bg-amber-500" /><div className="h-full flex-1 bg-rose-500" />
                      <motion.div animate={{ left: `${Math.min(Math.max((result.bmi / 40) * 100, 0), 100)}%` }} className="absolute top-0 -translate-x-1/2 w-1.5 h-full bg-slate-900 shadow-xl z-10" />
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm"><Info className="w-4 h-4 text-blue-600" /> Analysis</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{result.description} A healthy BMI range is between 18.5 and 24.9 [file:5].</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/categories" className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 group transition-all">
                      Learn more about categories
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className={`p-4 rounded-2xl border ${cat.border} ${cat.color} space-y-1 transition-all hover:scale-105 shadow-sm`}>
            <h4 className="font-bold text-[10px] uppercase tracking-widest opacity-70">{cat.name}</h4>
            <p className="text-2xl font-black">{cat.range[0]} - {cat.range[1] === 100 ? "30+" : cat.range[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
