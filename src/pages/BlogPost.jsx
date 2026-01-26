import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Share2,
    Linkedin,
    Twitter,
    Copy
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import GridBackground, { SectionGrid } from '../components/DecorativeElements';
import { Helmet } from 'react-helmet-async';

// Simple Markdown Parser Component
const MarkdownRenderer = ({ content }) => {
    if (!content) return null;

    const parseInline = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-200 font-bold">$1</strong>')
            .replace(/\`(.*?)\`/g, '<code class="bg-zinc-800 text-emerald-400 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
    };

    const sections = content.split('\n');
    let inCodeBlock = false;

    return (
        <div className="space-y-6">
            {sections.map((line, idx) => {
                const cleanLine = line.trim();

                if (!cleanLine && !inCodeBlock) return <br key={idx} />;

                // Code Blocks
                if (cleanLine.startsWith('```')) {
                    inCodeBlock = !inCodeBlock;
                    return null;
                }

                if (inCodeBlock) {
                    return <div key={idx} className="bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs text-zinc-400 overflow-x-auto rounded-sm mb-1">{line}</div>;
                }

                // Headers
                if (cleanLine.startsWith('## ')) return <h2 key={idx} className="text-2xl md:text-3xl font-light text-zinc-100 mt-12 mb-6">{cleanLine.replace('## ', '')}</h2>;
                if (cleanLine.startsWith('### ')) return <h3 key={idx} className="text-xl font-bold text-emerald-500 uppercase tracking-widest mt-8 mb-4">{cleanLine.replace('### ', '')}</h3>;
                if (cleanLine.startsWith('#### ')) return <h4 key={idx} className="text-lg font-bold text-zinc-300 mt-6 mb-2">{cleanLine.replace('#### ', '')}</h4>;

                // Lists
                if (cleanLine.startsWith('* ') || cleanLine.startsWith('- ')) {
                    const listContent = cleanLine.substring(2);
                    return (
                        <li key={idx} className="ml-4 list-disc marker:text-emerald-500 pl-2 text-zinc-400 font-light leading-relaxed mb-2"
                            dangerouslySetInnerHTML={{ __html: parseInline(listContent) }}
                        />
                    );
                }

                // Numbered Lists
                if (/^\d+\./.test(cleanLine)) {
                    const num = cleanLine.split('.')[0];
                    const listContent = cleanLine.substring(cleanLine.indexOf('.') + 1).trim();
                    return (
                        <div key={idx} className="flex gap-3 ml-2 mb-2">
                            <span className="text-emerald-500 font-mono font-bold">{num}.</span>
                            <p className="text-zinc-400 font-light leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: parseInline(listContent) }}
                            />
                        </div>
                    );
                }

                // Blockquotes
                if (cleanLine.startsWith('> ')) {
                    return (
                        <blockquote key={idx} className="border-l-2 border-emerald-500 pl-6 py-2 my-8 italic text-zinc-300 bg-emerald-500/5 rounded-r-sm"
                            dangerouslySetInnerHTML={{ __html: parseInline(cleanLine.replace('> ', '')) }}
                        />
                    );
                }

                // Paragraphs
                return (
                    <p key={idx} className="text-zinc-400 font-light leading-loose text-lg mb-4"
                        dangerouslySetInnerHTML={{ __html: parseInline(cleanLine) }}
                    />
                );
            })}
        </div>
    );
};

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = blogPosts.find(p => p.slug === slug);
        if (foundPost) {
            setPost(foundPost);
        } else {
            navigate('/blog');
        }
    }, [slug, navigate]);

    if (!post) return null;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
            <Helmet>
                <title>{post.title} | Artificialyze Intelligence</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.publishedAt} />
                <meta property="article:author" content={post.author} />
                <link rel="canonical" href={`https://artificialyze.com/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "${post.title}",
                        "description": "${post.excerpt}",
                        "author": {
                            "@type": "Organization",
                            "name": "${post.author}"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Artificialyze"
                        },
                        "datePublished": "${post.publishedAt}"
                    }
                    `}
                </script>
            </Helmet>
            <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 to-emerald-400 z-[60]"></div>

            <article className="relative pt-32 pb-24 px-6 md:px-0">
                <SectionGrid />

                {/* Header */}
                <div className="max-w-3xl mx-auto relative z-10 mb-16">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-emerald-500 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dossier
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 items-center border-t border-b border-zinc-900 py-6">
                        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                            <Calendar className="w-4 h-4 text-emerald-500" /> {post.publishedAt}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                            <Clock className="w-4 h-4 text-emerald-500" /> {post.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                            <User className="w-4 h-4 text-emerald-500" /> {post.author}
                        </div>
                        <div className="ml-auto">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                {post.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto relative z-10">
                    <MarkdownRenderer content={post.content} />
                </div>

                {/* Footer / Share */}
                <div className="max-w-3xl mx-auto mt-24 pt-12 border-t border-zinc-900 flex justify-between items-center">
                    <p className="text-zinc-600 text-sm italic">Artificialyze Inc. Proprietary Research.</p>
                    <div className="flex gap-4">
                        <button className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                        <button className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                        <button className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Copy className="w-5 h-5" /></button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
