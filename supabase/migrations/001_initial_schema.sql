-- Content table for teacher guides, student tips, AI guides, grammar, writing templates
CREATE TABLE IF NOT EXISTS content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('lararhandledning', 'elevtips', 'ai-guide', 'grammatik', 'skrivmall')),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  age_group TEXT NOT NULL CHECK (age_group IN ('lagstadiet', 'mellanstadiet', 'hogstadiet', 'gymnasiet')),
  subject TEXT NOT NULL DEFAULT 'svenska' CHECK (subject IN ('svenska', 'sva')),
  topics TEXT[] NOT NULL DEFAULT '{}',
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(type, slug, age_group, subject)
);

-- Curriculum cache
CREATE TABLE IF NOT EXISTS curriculum_cache (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_code TEXT NOT NULL UNIQUE,
  data JSONB NOT NULL DEFAULT '{}',
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Words of the week
CREATE TABLE IF NOT EXISTS words (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  word TEXT NOT NULL,
  definition TEXT NOT NULL,
  word_class TEXT NOT NULL DEFAULT '',
  example TEXT NOT NULL DEFAULT '',
  age_group TEXT NOT NULL CHECK (age_group IN ('lagstadiet', 'mellanstadiet', 'hogstadiet', 'gymnasiet')),
  week_number INTEGER NOT NULL CHECK (week_number BETWEEN 1 AND 53),
  UNIQUE(word, age_group, week_number)
);

-- Enable Row Level Security
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE words ENABLE ROW LEVEL SECURITY;

-- Public read access policies (no auth needed to read)
CREATE POLICY "Public read access" ON content FOR SELECT USING (true);
CREATE POLICY "Public read access" ON curriculum_cache FOR SELECT USING (true);
CREATE POLICY "Public read access" ON words FOR SELECT USING (true);

-- Index for common queries
CREATE INDEX IF NOT EXISTS idx_content_type_age ON content(type, age_group);
CREATE INDEX IF NOT EXISTS idx_content_slug ON content(slug);
CREATE INDEX IF NOT EXISTS idx_words_age_week ON words(age_group, week_number);
