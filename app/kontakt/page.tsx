'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  Mail,
  Phone,
  Building,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

const contactSchema = z.object({
  jmeno: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Zadejte platný email'),
  telefon: z.string().optional(),
  typWebu: z.string().min(1, 'Vyberte typ webu'),
  rozpocet: z.string().optional(),
  zprava: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
  souhlas: z.literal(true, {
    errorMap: () => ({ message: 'Musíte souhlasit se zpracováním údajů' }),
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const typyWebu = [
  'Firemní web',
  'Landing page',
  'E-shop',
  'Portfolio',
  'Redesign',
  'Jiné',
]

const rozpocty = [
  'Do 20 000 Kč',
  '20 000 – 50 000 Kč',
  '50 000 – 100 000 Kč',
  'Nad 100 000 Kč',
  'Nevím',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'julius.joska@weboffka.cz', href: 'mailto:julius.joska@weboffka.cz' },
  { icon: Phone, label: 'Telefon', value: '+420 731 860 594', href: 'tel:+420731860594' },
  { icon: Building, label: 'IČO', value: '24409979', href: null },
]

export default function KontaktPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3 bg-bg-elevated border border-stroke rounded-xl text-text placeholder:text-text-tertiary focus:outline-none focus:border-lime/50 focus:ring-1 focus:ring-lime/25 transition-colors text-sm'

  return (
    <div className="pt-24 md:pt-32">
      <section className="w-section pt-8 md:pt-12">
        <div className="w-container">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-label mb-4"
            >
              Kontakt
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-heading mb-6"
            >
              Napište nám
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-text-secondary max-w-2xl mx-auto"
            >
              Popište nám svůj projekt a my se vám ozveme do 24 hodin
              s nezávaznou nabídkou.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="w-card">
                <h3 className="w-subheading text-lg mb-6">Kontaktní údaje</h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-lime-dim">
                        <info.icon size={18} className="text-lime" />
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium hover:text-lime transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-card-glass">
                <h3 className="font-medium mb-3">Fakturační údaje</h3>
                <div className="text-sm text-text-secondary space-y-1">
                  <p>Julius Joska — ajtak.it</p>
                  <p>IČO: 24409979</p>
                  <p>Neplátce DPH</p>
                </div>
              </div>

              <div className="w-card-glass">
                <h3 className="font-medium mb-3">Jak to funguje?</h3>
                <ol className="text-sm text-text-secondary space-y-2 list-decimal list-inside">
                  <li>Vyplníte formulář nebo zavoláte</li>
                  <li>Probereme váš projekt a potřeby</li>
                  <li>Připravíme nezávaznou nabídku</li>
                  <li>Po schválení začínáme tvořit</li>
                </ol>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="w-card">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-lime mx-auto mb-4" />
                    <h3 className="w-subheading mb-2">Zpráva odeslána!</h3>
                    <p className="text-text-secondary">
                      Děkujeme za vaši poptávku. Ozveme se vám do 24 hodin.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="w-btn-ghost mt-6"
                    >
                      Odeslat další zprávu
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="jmeno" className="block text-sm font-medium mb-2">
                          Jméno a příjmení *
                        </label>
                        <input
                          id="jmeno"
                          type="text"
                          placeholder="Jan Novák"
                          className={inputClasses}
                          {...register('jmeno')}
                        />
                        {errors.jmeno && (
                          <p className="text-red-400 text-xs mt-1">{errors.jmeno.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="jan@firma.cz"
                          className={inputClasses}
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telefon" className="block text-sm font-medium mb-2">
                          Telefon
                        </label>
                        <input
                          id="telefon"
                          type="tel"
                          placeholder="+420 123 456 789"
                          className={inputClasses}
                          {...register('telefon')}
                        />
                      </div>

                      <div>
                        <label htmlFor="typWebu" className="block text-sm font-medium mb-2">
                          Typ webu *
                        </label>
                        <select
                          id="typWebu"
                          className={inputClasses}
                          defaultValue=""
                          {...register('typWebu')}
                        >
                          <option value="" disabled>
                            Vyberte typ webu
                          </option>
                          {typyWebu.map((typ) => (
                            <option key={typ} value={typ}>
                              {typ}
                            </option>
                          ))}
                        </select>
                        {errors.typWebu && (
                          <p className="text-red-400 text-xs mt-1">{errors.typWebu.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="rozpocet" className="block text-sm font-medium mb-2">
                        Rozpočet
                      </label>
                      <select
                        id="rozpocet"
                        className={inputClasses}
                        defaultValue=""
                        {...register('rozpocet')}
                      >
                        <option value="">Nechci uvádět</option>
                        {rozpocty.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="zprava" className="block text-sm font-medium mb-2">
                        Zpráva *
                      </label>
                      <textarea
                        id="zprava"
                        rows={5}
                        placeholder="Popište svůj projekt — co potřebujete, jaké máte představy..."
                        className={`${inputClasses} resize-none`}
                        {...register('zprava')}
                      />
                      {errors.zprava && (
                        <p className="text-red-400 text-xs mt-1">{errors.zprava.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-stroke bg-bg-elevated accent-lime"
                          {...register('souhlas')}
                        />
                        <span className="text-sm text-text-secondary">
                          Souhlasím se zpracováním osobních údajů za účelem
                          vyřízení poptávky dle{' '}
                          <a
                            href="/ochrana-osobnich-udaju"
                            className="text-lime hover:underline"
                          >
                            zásad ochrany osobních údajů
                          </a>
                          . *
                        </span>
                      </label>
                      {errors.souhlas && (
                        <p className="text-red-400 text-xs mt-1">{errors.souhlas.message}</p>
                      )}
                    </div>

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-400/10">
                        <AlertCircle size={18} />
                        Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nám napište na julius.joska@weboffka.cz.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Odesílám...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Odeslat poptávku
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
