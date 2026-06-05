"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, ShieldCheck, Server, Users, CreditCard, Briefcase, Cloud, Globe } from 'lucide-react';

const CATEGORIES = [
  { label: 'Agile Tools', icon: Layers },
  { label: 'Kanban Boards', icon: Layout },
  { label: 'Task Management', icon: CheckCircle },
  { label: 'Portfolio Mgmt', icon: BarChart3 },
  { label: 'Time Tracking', icon: Clock },
  { label: 'Team Collab', icon: MessageSquare },
  { label: 'Gantt Charts', icon: TrendingUp },
  { label: 'Enterprise', icon: Briefcase },
];

export default function Hero() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#162540] border border-[#1E3A5F] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] pulse-dot" />
          <span className="text-sm font-medium text-[#06B6D4]">200+ PM Tools Reviewed</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#F0F2FE] tracking-tight leading-[1.05] mb-6 max-w-3xl"
        >
          Find the Perfect PM Tool to{' '}
          <span className="text-gradient" style={{ textShadow: '0 0 40px rgba(8,145,178,0.3)' }}>
            Scale Your Business
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#839BBE] max-w-2xl mb-10 leading-relaxed"
        >
          Compare 200+ project management tools. Read verified reviews, analyze pricing, and find the right software for your team.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className={`w-full max-w-[640px] flex items-center relative transition-all duration-300 ${
            isFocused ? 'shadow-glow-sm' : ''
          }`}
        >
          <div
            className={`w-full flex items-center rounded-full border transition-all duration-300 ${
              isFocused
                ? 'border-[#284880] bg-[#162540]'
                : 'border-[#1E3A5F] bg-[#0F1F2D]'
            }`}
          >
            <Search className="ml-5 w-5 h-5 text-[#4A6080] flex-shrink-0" />
            <input
              type="search"
              placeholder="Search for Asana, Jira, ClickUp..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 py-4 px-3 bg-transparent text-[#F0F2FE] placeholder:text-[#4A6080] outline-none text-base"
            />
            <button
              type="submit"
              className="mr-2 px-6 py-2.5 bg-[#0891B2] hover:bg-[#067A9A] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
            >
              Search
            </button>
          </div>
        </motion.form>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl"
        >
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: '#162540' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F1F2D] border border-[#1E3A5F] text-sm text-[#839BBE] hover:text-[#F0F2FE] hover:border-[#284880] transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
