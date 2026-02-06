'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Jméno je povinné'),
  email: z.string().email('Neplatný email'),
  website: z.string().optional(),
  website_url: z.string().optional(),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  gdprConsent: z.literal(true, { errorMap: () => ({ message: 'Musíte souhlasit se zpracováním osobních údajů' }) }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading-1 mb-4">Pojďme si promluvit</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Popište nám váš projekt. Co potřebujete, pro koho to je, jaký máte rozpočet.
              Čím víc nám řeknete, tím přesnější nabídku dostanete.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitStatus === 'success' ? (
                <div className="p-8 bg-green-500/10 rounded-xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Díky!</h3>
                  <p className="text-muted">Ozveme se do 24 hodin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input {...register('website_url')} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Jméno / Firma *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Jan Novák"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="jan@firma.cz"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Váš web (volitelné)
                    </label>
                    <input
                      {...register('website')}
                      type="text"
                      placeholder="www.mojefirma.cz"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      O co jde? *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Popište váš projekt..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Rozpočet
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    >
                      <option value="">Vyberte...</option>
                      <option value="do-20k">do 20 000 Kč</option>
                      <option value="20-50k">20 000 - 50 000 Kč</option>
                      <option value="50-100k">50 000 - 100 000 Kč</option>
                      <option value="nad-100k">nad 100 000 Kč</option>
                      <option value="nevim">Nevím</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Kdy to potřebujete?
                    </label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    >
                      <option value="">Vyberte...</option>
                      <option value="asap">Co nejdřív</option>
                      <option value="mesic">Do měsíce</option>
                      <option value="ctvrtleti">Do čtvrt roku</option>
                      <option value="nespecha">Nespěchá</option>
                    </select>
                  </div>

                  {/* GDPR */}
                  <div className="flex items-start gap-3">
                    <input
                      {...register('gdprConsent')}
                      type="checkbox"
                      id="gdprConsent"
                      className="mt-1 w-4 h-4 accent-accent"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-muted">
                      Souhlasím se{' '}
                      <a href="/ochrana-osobnich-udaju" className="text-accent hover:underline" target="_blank">
                        zpracováním osobních údajů
                      </a>{' '}
                      za účelem vyřízení poptávky. *
                    </label>
                  </div>
                  {errors.gdprConsent && (
                    <p className="text-red-500 text-sm">{errors.gdprConsent.message}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Odesílám...'
                    ) : (
                      <>
                        Odeslat <Send size={18} />
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle size={16} />
                      Něco se pokazilo. Zkuste to znovu nebo napište na info@weboffka.cz
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="p-6 bg-background-secondary rounded-xl border border-border">
                <h3 className="font-semibold text-lg mb-6">Kontakt</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-accent" size={20} />
                    <a
                      href="mailto:info@weboffka.cz"
                      className="hover:text-accent transition-colors"
                    >
                      info@weboffka.cz
                    </a>
                  </div>
                </div>

                <hr className="my-6" />

                <p className="text-sm text-muted">
                  Odpovídáme do 24 hodin v pracovní dny.
                  Preferujeme email — můžeme si v klidu rozmyslet odpověď.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
