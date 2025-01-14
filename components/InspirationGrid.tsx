import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const inspirationCategories = [
  {
    title: "Brand Guidelines",
    description: "Comprehensive style guides and brand books",
    image: "/placeholder.svg?height=100&width=200",
    id: "guidelines"
  },
  {
    title: "Logos",
    description: "Iconic and memorable brand marks",
    image: "/placeholder.svg?height=100&width=200",
    id: "logos"
  },
  {
    title: "Typography",
    description: "Font pairings and typographic systems",
    image: "/placeholder.svg?height=100&width=200",
    id: "typography"
  },
  {
    title: "Mood Boards",
    description: "Visual collections capturing brand essence",
    image: "/placeholder.svg?height=100&width=200",
    id: "moodboards"
  },
  {
    title: "Color Schemes",
    description: "Harmonious color palettes for brand identities",
    image: "/placeholder.svg?height=100&width=200",
    id: "colorschemes"
  },
  {
    title: "Brand Voice",
    description: "Tone and messaging guidelines",
    image: "/placeholder.svg?height=100&width=200",
    id: "brandvoice"
  }
]

export default function InspirationGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Explore Inspiration</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inspirationCategories.map((category) => (
            <Card key={category.id} id={category.id}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={200}
                  height={100}
                  className="rounded-md object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

