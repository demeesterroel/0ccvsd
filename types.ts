
export type PageId = 
  | 'intro' 
  | 'philosophy' 
  | 'phase1-overview'
  | 'p1-s1' | 'p1-s2' | 'p1-s3' | 'p1-s4' | 'p1-s5' | 'p1-s6'
  | 'phase2-overview'
  | 'p2-s1' | 'p2-s2' | 'p2-s3' | 'p2-s4' | 'p2-s5'
  | 'phase3-overview'
  | 'p3-s1' | 'p3-s2' | 'p3-s3' | 'p3-s4' | 'p3-s5'
  | 'glossary' | 'pdf-guide' | 'patterns' | 'export';

export interface PageContent {
  id: PageId;
  label: string;
  title: string;
  subtitle?: string;
  tag?: string;
  progress: number;
}