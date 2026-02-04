"use client"

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    const text = `Olá! Meu nome é ${name}.
Email: ${email}
Mensagem: ${message}`

    const whatsappUrl = `https://wa.me/5585996188130?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Contato
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Nome"
          required
          className="w-full bg-transparent border-b border-white/20 py-2 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full bg-transparent border-b border-white/20 py-2 outline-none"
        />

        <textarea
          name="message"
          placeholder="Mensagem"
          rows={4}
          required
          className="w-full bg-transparent border-b border-white/20 py-2 outline-none resize-none"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#ff6aa2] text-black px-8 py-3 rounded-full font-medium"
          >
            Enviar pelo WhatsApp
          </button>
        </div>
      </form>
    </section>
  )
}
