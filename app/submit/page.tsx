'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import SubmissionForm from './SubmissionForm'

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    category: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const categories = [
    { id: 'mood-boards', label: 'Mood Boards' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'style-systems', label: 'Style Guides & Design Systems' },
    { id: 'typography', label: 'Typography' },
    { id: 'color-palettes', label: 'Color Palettes' },
    { id: 'logo-design', label: 'Logo Design' },
    { id: 'brand-guidelines', label: 'Brand Guidelines' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit resource')
      }

      setSuccess(true)
      setFormData({
        title: '',
        description: '',
        link: '',
        category: ''
      })

      // Redirect to home after 2 seconds
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#0E1015] text-white">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2">Submit a Resource</h1>
          <p className="text-white/60">Share a valuable brand design resource with the community.</p>
        </div>

        <SubmissionForm />

        <div className="mt-6 flex items-center gap-4">
          <Link 
            href="/"
            className="px-6 py-3 rounded-xl text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
          >
            Submit Resource
          </button>
          <Link 
            href="/"
            className="px-6 py-3 rounded-xl text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>

        {success && (
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Resource Submitted Successfully!</h2>
            <p className="text-white/60 mb-8">Thank you for contributing to the community.</p>
            
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 