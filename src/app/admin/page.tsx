'use client';

/**
 * Admin Page
 * Manages music uploads, VTT files, and upcoming shows
 * Client component - requires interactivity
 */

import { useState } from 'react';
import Link from 'next/link';
import TarotCardContainer from '@/components/TarotCardContainer';
import PageTransition from '@/components/PageTransition';
import Starfield from '@/components/Starfield';
import MusicUploadForm from '@/components/admin/MusicUploadForm';
import VTTEditor from '@/components/admin/VTTEditor';
import ShowManagementForm from '@/components/admin/ShowManagementForm';

type AdminTab = 'music' | 'vtt' | 'shows';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('music');

  return (
    <PageTransition>
      <Starfield />
      
      <TarotCardContainer>
        {/* Header */}
        <header className="text-center mb-12 border-b-2 border-tarot-border pb-8">
          <div className="flex items-center justify-center gap-3 mb-6 text-tarot-border">
            <span className="text-2xl">❧</span>
            <span className="text-xl">✦</span>
            <span className="text-2xl">❧</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-tarot-text-main mb-3 tracking-widest uppercase">
            Admin Portal
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-tarot-accent my-4">
            <span className="w-16 h-px bg-tarot-accent"></span>
            <span className="text-sm uppercase tracking-widest">Management</span>
            <span className="w-16 h-px bg-tarot-accent"></span>
          </div>
          
          <p className="text-base md:text-lg text-tarot-text-muted italic font-light">
            Content Management System
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex justify-center gap-6 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('music')}
            className={`text-xl md:text-2xl transition-colors font-medium ${
              activeTab === 'music'
                ? 'text-tarot-accent'
                : 'text-tarot-text-muted hover:text-tarot-hover'
            }`}
          >
            Music Upload
          </button>
          <span className="text-tarot-border">•</span>
          <button
            onClick={() => setActiveTab('vtt')}
            className={`text-xl md:text-2xl transition-colors font-medium ${
              activeTab === 'vtt'
                ? 'text-tarot-accent'
                : 'text-tarot-text-muted hover:text-tarot-hover'
            }`}
          >
            VTT Editor
          </button>
          <span className="text-tarot-border">•</span>
          <button
            onClick={() => setActiveTab('shows')}
            className={`text-xl md:text-2xl transition-colors font-medium ${
              activeTab === 'shows'
                ? 'text-tarot-accent'
                : 'text-tarot-text-muted hover:text-tarot-hover'
            }`}
          >
            Show Management
          </button>
        </nav>

        {/* Content Area */}
        <main className="min-h-[600px]">
          {activeTab === 'music' && <MusicUploadForm />}
          {activeTab === 'vtt' && <VTTEditor />}
          {activeTab === 'shows' && <ShowManagementForm />}
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-tarot-border">
          <Link href="/" className="text-tarot-accent hover:text-tarot-hover transition-colors text-lg font-medium">
            ← Back to Main Site
          </Link>
        </footer>
      </TarotCardContainer>
    </PageTransition>
  );
}
