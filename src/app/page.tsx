"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function HomePage() {
  const cryptoStats = [
    { name: "Bitcoin", price: "$62,450", change: "+3.2%" },
    { name: "Ethereum", price: "$3,150", change: "+1.7%" },
    { name: "Solana", price: "$142", change: "+5.8%" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      
      {/* Hero Section */}
      <section>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          🚀 CryptoPay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-2xl mb-6"
        >
          The fastest, most secure way to send and receive cryptocurrency — anywhere in the world.
        </motion.p>

        <Button color="primary" size="lg" radius="full" variant="shadow">
          Get Started
        </Button>
      </section>

      {/* Crypto Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {cryptoStats.map((coin, index) => (
          <motion.div
            key={coin.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-gray-900 border border-gray-700">
              <CardHeader className="flex justify-between">
                <h3 className="text-xl font-semibold">{coin.name}</h3>
                <span className="text-green-400">{coin.change}</span>
              </CardHeader>
              <CardBody>
                <p className="text-2xl font-bold">{coin.price}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Payment Form */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-900 border border-gray-700">
          <CardBody className="flex flex-col gap-4">
            <Input placeholder="Enter wallet address" fullWidth variant="bordered" />
            <Input placeholder="Enter amount" type="number" fullWidth variant="bordered" />
            <Button color="secondary" size="lg" radius="sm" variant="shadow">
              Send Payment
            </Button>
          </CardBody>
        </Card>
      </motion.section>

    </main>
  );
}
