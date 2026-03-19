-- Extend the words table with fields for full word entries
-- These fields were previously only in the hardcoded TypeScript data

ALTER TABLE words
  ADD COLUMN IF NOT EXISTS definition TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS example TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS etymology TEXT,
  ADD COLUMN IF NOT EXISTS difficulty TEXT NOT NULL DEFAULT 'medel'
    CHECK (difficulty IN ('enkel', 'medel', 'avancerad')),
  ADD COLUMN IF NOT EXISTS theme TEXT NOT NULL DEFAULT 'vardagsliv';

-- Index for theme filtering
CREATE INDEX IF NOT EXISTS idx_words_theme ON words (age_group, theme);

-- Index for difficulty filtering
CREATE INDEX IF NOT EXISTS idx_words_difficulty ON words (age_group, difficulty);
