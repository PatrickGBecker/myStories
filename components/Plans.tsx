import Head from "next/head"
import Image from "next/legacy/image"
import myStoriesLogo from '../public/my-stories-logo.png'
import Link from "next/link"
import useAuth from "../hooks/useAuth"
import { HiCheck } from "react-icons/hi2"
import Table from "./Table"
import { Product } from "@stripe/firestore-stripe-payments"
import { useState } from "react"

interface Props {
    products: Product[]
}

function Plans({ products }: Props) {
    const {logout} = useAuth()
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  return (
    <div>
        <Head>
            <title>My Stories</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        
        <header className="border-b border-white/10 bg-[#141414]">
            <Link href='/'>
                <Image 
                    src={myStoriesLogo}
                    width={150}
                    height={40}
                    className='cursor-pointer object-contain'
                />
            </Link>
                <button 
                    className="text-lg font-medium hover:underline"
                    onClick={logout}>
                Sign Out
                </button>
        </header>

        <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
            <h1 className="mb-3 text-3xl font-medium">
            Choose the plan that's right for you
            </h1>
            <ul>
                <li className="flex items-center gap-x-2 text-lg">
                    <HiCheck className="h-7 w-7 text-[#00cc33]" /> Watch all you want.
                    Ad-free.
                </li>
                <li className="flex items-center gap-x-2 text-lg">
                    <HiCheck className="h-7 w-7 text-[#00cc33]" /> Recommendations
                    just for you.
                </li>
                <li className="flex items-center gap-x-2 text-lg">
                    <HiCheck className="h-7 w-7 text-[#00cc33]" /> Change or cancel
                    your plan anytime.
                </li>
            </ul>

            <div className="mt-4 flex flex-col space-y-4">
                <div className="flex w-full items-center self-end md:w-3/5">
                  {products.map((product) => (
                    <div 
                        key={product.id} 
                        className={`planBox ${
                            selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                            }`}
                        onClick={() => setSelectedPlan(product)}
                    >
                        {product.name}</div> 
                  ))}  
                </div>

                <Table 
                    products={products}
                    selectedPlan={selectedPlan}
                />

                <button>Subscribe</button>
            </div>
        </main>
    </div>
  )
}

export default Plans