"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function SubmissionForm() {
  const [email, setEmail] = useState("")
  const [resource, setResource] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submission:", { email, resource, description })
    toast({
      title: "Resource Submitted",
      description: "Thank you for contributing to our brand inspiration directory!",
    })
    setEmail("")
    setResource("")
    setDescription("")
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Contribute to Our Directory</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="url"
            placeholder="Resource URL"
            value={resource}
            onChange={(e) => setResource(e.target.value)}
            required
          />
          <Textarea
            placeholder="Brief description of the resource"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Submit Resource</Button>
        </form>
      </div>
    </section>
  )
}

