"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { DatePicker } from "@/components/ui/date-picker"
import { Calendar } from "@/components/ui/calendar"

import { format } from "date-fns"

export default function Home() {
  const [popoverDate, setPopoverDate] = React.useState<Date | undefined>(new Date())
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(new Date())

  return (
    <main className="min-h-screen bg-muted/20 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Components Showcase</h1>
          <p className="text-muted-foreground mt-1">
            Overview of all installed shadcn/ui components organized in cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Date Picker (Popover) */}
          <Card>
            <CardHeader>
              <CardTitle>Date Picker</CardTitle>
              <CardDescription>
                Popover-based date selector with formatted output.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DatePicker
                date={popoverDate}
                setDate={setPopoverDate}
                placeholder="Select a date"
              />
              <p className="text-xs text-muted-foreground">
                Selected:{" "}
                <span className="font-medium text-foreground" suppressHydrationWarning>
                  {popoverDate ? format(popoverDate, "PPP") : "None"}
                </span>
              </p>
            </CardContent>
          </Card>

          {/* 2. Inline Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>
                Standalone interactive calendar component.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={calendarDate}
                onSelect={setCalendarDate}
                className="rounded-md border shadow-xs"
              />
              <p className="text-xs text-muted-foreground mt-3">
                Selected:{" "}
                <span className="font-medium text-foreground" suppressHydrationWarning>
                  {calendarDate ? format(calendarDate, "PPP") : "None"}
                </span>
              </p>
            </CardContent>
          </Card>

          {/* 3. Buttons & Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons & Badges</CardTitle>
              <CardDescription>
                Various button styles and badge variants.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* 4. Inputs & Form Fields */}
          <Card>
            <CardHeader>
              <CardTitle>Inputs & Fields</CardTitle>
              <CardDescription>
                Form controls with labels and helper descriptions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Field>
                <FieldLabel htmlFor="demo-name">Name</FieldLabel>
                <Input id="demo-name" placeholder="Jane Doe" />
                <FieldDescription>Enter your full display name.</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="demo-email">Email</FieldLabel>
                <Input id="demo-email" type="email" placeholder="jane@example.com" />
              </Field>
            </CardContent>
          </Card>

          {/* 5. Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>
                Collapsible interactive disclosure sections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>First Section</AccordionTrigger>
                  <AccordionContent>
                    Content and details for the first accordion item.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Second Section</AccordionTrigger>
                  <AccordionContent>
                    Content and details for the second accordion item.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* 6. Image with Fallback */}
          <Card>
            <CardHeader>
              <CardTitle>Image with Fallback</CardTitle>
              <CardDescription>
                Image component with graceful fallback handling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Demo Preview</Label>
                <div className="relative w-full h-36 border rounded-lg overflow-hidden bg-muted">
                  <ImageWithFallback
                    src="https://picsum.photos/id/237/1440/720"
                    alt="Sample Image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
