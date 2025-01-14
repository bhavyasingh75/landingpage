export default function InspirationGrid() {
  const examples = [
    {
      title: "Project Documentation",
      description: "Create beautiful project documentation with ease",
      image: "/examples/project-docs.png"
    },
    {
      title: "API Reference",
      description: "Generate comprehensive API documentation",
      image: "/examples/api-docs.png"
    },
    {
      title: "User Guides",
      description: "Build user-friendly guides and tutorials",
      image: "/examples/user-guides.png"
    },
    {
      title: "Knowledge Base",
      description: "Organize your team's knowledge effectively",
      image: "/examples/knowledge-base.png"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#14124f] text-center mb-12">
          Documentation that inspires
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-md mb-4">
                {/* Replace with actual images */}
              </div>
              <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
              <p className="text-gray-600">{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 