'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { TableOfContents, type Heading } from './TableOfContents';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from 'lucide-react';

export function MobileTOC({ headings }: { headings: Heading[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Body scroll lock when bottom sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (headings.length === 0) return null;

  return (
    <div className="md:hidden">
      {/* V3 FAB (Floating Action Button) */}
      <Button
        variant="primary"
        onClick={() => setIsOpen(true)}
        aria-label="목차 열기"
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 w-14 h-14 p-0 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{
          zIndex: 40,
          boxShadow: 'var(--sng-shadow-floating)',
          backgroundColor: 'var(--sng-color-brand-primary)',
          color: 'var(--sng-color-text-inverse)',
        }}
      >
        <List size={24} />
      </Button>

      {/* V3 BottomSheet Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="presentation"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40"
              style={{ zIndex: 50 }}
            />

            {/* BottomSheet Content */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="모바일 메뉴"
              className="fixed bottom-0 left-0 right-0 w-full max-h-[80vh] flex flex-col rounded-t-3xl overflow-hidden"
              style={{
                zIndex: 51,
                backgroundColor: 'var(--sng-color-bg-base)',
                boxShadow: 'var(--sng-shadow-floating)',
              }}
            >
              {/* Drag Handle */}
              <div
                className="w-full py-4 flex justify-center items-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-12 h-1.5 rounded-full bg-[var(--sng-color-border-default)]" />
              </div>

              <div className="px-6 pb-4 flex items-center justify-between border-b border-[var(--sng-color-border-subtle)]">
                <h3 className="text-xl font-bold text-[var(--sng-color-text-primary)]">
                  목차
                </h3>
                <Button
                  variant="secondary"
                  onClick={() => setIsOpen(false)}
                  className="!p-2 text-[var(--sng-color-icon-muted)] bg-transparent border-transparent"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <TableOfContents
                  headings={headings}
                  className="!static !block !max-h-none"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
