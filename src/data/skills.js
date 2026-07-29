// Central skills data, grouped by category.
// Skills.jsx maps over this array to render animated category cards —
// add or remove an entry here and the UI updates automatically.
import {
  SiPython,
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiPostgresql,
} from 'react-icons/si'

import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'
import { FaGoogle } from 'react-icons/fa'

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Postgre SQL', icon: SiPostgresql },
      
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Random Forest' },
      { name: 'XGBoost' },
      { name: 'LLMs' },
      { name: 'Generative AI' },
      { name: 'Gemini API' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
]
