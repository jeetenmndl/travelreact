import { testimonials } from '@/lib/constants'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Quote, Star } from 'lucide-react'

const Testimmonials = () => {
  return (
     <section className="py-16 px-10" id='testimonials'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from thousands of satisfied travelers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="px-6 py-2">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimmonials