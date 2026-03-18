import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="container-main pt-24 pb-16">
        <h1 className="font-syne text-4xl font-extrabold mb-4">Choisissez votre entreprise</h1>
        <p className="text-neutral-600 max-w-2xl mb-10">
          Sélectionnez la bannière qui correspond à votre entreprise pour afficher la page complète.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/bria"
            className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 hover:border-brand-amber/50 hover:shadow-sm transition-shadow"
          >
            <div className="font-syne text-xl font-extrabold">BRIA Electrique Inc</div>
            <div className="text-neutral-500 mt-2">Voir la page</div>
          </Link>

          <Link
            href="/elumina"
            className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 hover:border-brand-amber/50 hover:shadow-sm transition-shadow"
          >
            <div className="font-syne text-xl font-extrabold text-blue-700">Elumina Electrique</div>
            <div className="text-neutral-500 mt-2">Voir la page</div>
          </Link>

          <Link
            href="/solutions-plus-electrique"
            className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 hover:border-blue-500/50 hover:shadow-sm transition-shadow"
          >
            <div className="font-syne text-xl font-extrabold text-blue-700">Solutions Plus Électrique</div>
            <div className="text-neutral-500 mt-2">Voir la page</div>
          </Link>
        </div>
      </div>
    </main>
  )
}
