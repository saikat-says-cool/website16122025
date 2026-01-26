import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Clock,
    Calendar,
    ArrowRight,
    ChevronRight,
    Search,
    Tag
} from 'lucide-react';
import GridBackground, { GlobeElement, SectionGrid, GridFloor } from '../components/DecorativeElements';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden border-b border-zinc-900">
                <GridBackground />
                <GlobeElement />
                <GridFloor />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <p className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">Intelligence & Research</p>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8">THE ENGINEERING <br /> <span className="text-zinc-500">DOSSIER</span></h1>
                    <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                        Technical deep dives into outbound infrastructure, signal probability capability, and the mechanics of high-stakes revenue systems.
                    </p>
                </div>
            </section>

            {/* Filter & Search */}
            <section className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-6 justify-between items-center">

                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap rounded-sm transition-all ${selectedCategory === cat
                                        ? 'bg-emerald-500 text-black'
                                        : 'bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                        <input
                            type="text"
                            placeholder="Search dossier..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-sm py-2 pl-10 pr-4 text-xs font-mono text-zinc-300 focus:outline-none focus:border-emerald-500/50 placeholder:text-zinc-700"
                        />
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 px-6 relative overflow-hidden">
                <SectionGrid />
                <div className="max-w-7xl mx-auto relative z-10">
                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Link
                                    to={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="group bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden flex flex-col hover:border-emerald-500/30 transition-all shadow-lg hover:shadow-emerald-900/10"
                                >
                                    <div className="p-8 pb-0 flex-grow">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 px-2 py-1 bg-emerald-500/5 rounded border border-emerald-500/20">
                                                {post.category}
                                            </span>
                                            <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {post.publishedAt}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-light leading-tight mb-4 group-hover:text-emerald-400 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-3 mb-8">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="p-8 pt-0 mt-auto border-t border-zinc-900/50">
                                        <div className="flex items-center justify-between pt-6">
                                            <span className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                                                <Clock className="w-3 h-3" /> {post.readTime}
                                            </span>
                                            <span className="text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover Line */}
                                    <div className="h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 font-mono text-sm">No intelligence entries found matching criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                className="mt-4 text-emerald-500 text-xs uppercase tracking-widest underline hover:text-emerald-400"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
