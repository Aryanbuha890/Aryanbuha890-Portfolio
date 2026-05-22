import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Database, ChevronDown, ChevronUp, Terminal, Play, Circle } from 'lucide-react'

export default function Services() {
  const [expandedId, setExpandedId] = useState(null)

  const services = [
    {
      id: 'software',
      icon: Code,
      title: 'Software Development',
      tagline: 'Strong algorithms and object-oriented architectures.',
      desc: 'Building foundational programming excellence using core compiled and scripted environments. Emphasizing clean, structured data pipelines and robust problem-solving modules.',
      skills: ['C / C++ Programming', 'Java & Python Scripting', 'Data Structures & Algorithms (DSA)', 'Object-Oriented Design (OOP)', 'Git Version Control & Terminal Debugging'],
      projects: ['Console utilities & tools', 'Algorithmic optimization models', 'Academic system simulators', 'Competitive coding solutions'],
      codeMock: `// compile: g++ -O3 main.cpp -o app
#include <iostream>
#include <vector>

template<typename T>
class DataStack {
private:
    std::vector<T> elements;
public:
    void push(T const& elem) { elements.push_back(elem); }
    T pop() {
        T elem = elements.back();
        elements.pop_back();
        return elem;
    }
};

int main() {
    DataStack<std::string> logStack;
    logStack.push("SYSTEM_INIT_OK");
    std::cout << "Stack populated: OK\\n";
    return 0;
}`
    },
    {
      id: 'ai',
      icon: Cpu,
      title: 'AI & Machine Learning',
      tagline: 'Data cleaning, base model training, and analytical insights.',
      desc: 'Hands-on practice in assembling raw datasets, preparing features, selecting core metrics, training models, and engineering custom inference pipelines.',
      skills: ['Python Data Stack (Pandas, NumPy)', 'Model Training & Evaluation (Scikit-learn)', 'Feature Selection & Preprocessing', 'Fine-Tuning Pretrained Architectures', 'Analytical Dashboards & Visualizations'],
      projects: ['Smart Cattle Health & Milk Forecast (90% Acc)', 'Clinical Diagnostic Classifiers', 'Climate Hazard Forecasting Arrays', 'Small-scale predictive experiments'],
      codeMock: `# env: python3 -m venv ai-sandbox
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

# Load cattle health dataset
data = pd.read_csv("cattle_metrics.csv")
X = data[['temperature', 'rumination', 'activity']]
y = data['milk_yield_liters']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

score = model.score(X_test, y_test)
print(f"Model prediction accuracy: {score * 100:.2f}%")`
    },
    {
      id: 'fullstack',
      icon: Database,
      title: 'Full-Stack Development',
      tagline: 'Responsive Single Page React applications and fast API routing.',
      desc: 'Creating modern, interactive user interfaces backed by performant microservice servers and database integration layers.',
      skills: ['React.js & Next.js SPAs', 'Tailwind CSS UI Systems', 'RESTful API Engineering (Node/Express, FastAPI)', 'Database Integration (Supabase, PostgreSQL, MongoDB)', 'State Management & Secure API Calls'],
      projects: ['Coastal Threat Alert Dashboard', 'Portfolio SPA with Terminal Simulator', 'Real-time telemetry displays', 'Modular CRUD Admin Utilities'],
      codeMock: `// run: npm run dev --host
import React, { useState, useEffect } from 'react'

export const StatusMonitor = () => {
  const [nodes, setNodes] = useState([])
  
  useEffect(() => {
    fetch('/api/v1/nodes')
      .then(res => res.json())
      .then(data => setNodes(data))
  }, [])
  
  return (
    <div className="p-4 rounded border border-red-500/20 bg-black">
      <h3 className="font-mono text-xs text-red-500">Live Active Nodes ({nodes.length})</h3>
    </div>
  )
}`
    }
  ]

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/90">
      {/* Background glow ball */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-red-950/5 blur-3xl animated-glow-bg pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-left mb-16 space-y-2">
          <div className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            services.list()
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
          <div className="h-1 w-12 bg-red-600 rounded"></div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon
            const isExpanded = expandedId === svc.id

            return (
              <motion.div
                key={svc.id}
                layout="position"
                className={`glass-panel rounded-lg overflow-hidden glass-panel-hover flex flex-col w-full text-left transition-all ${
                  isExpanded ? 'border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : ''
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(svc.id)}
                  className="p-6 md:p-8 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="p-3 rounded bg-red-600/10 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg md:text-xl font-bold font-mono text-white tracking-wide">{svc.title}</h3>
                      <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-xl">{svc.tagline}</p>
                    </div>
                  </div>

                  <div className="text-neutral-500 group-hover:text-red-500 transition-colors p-2">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/5 bg-black/40"
                    >
                      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-text">
                        {/* Skills and details */}
                        <div className="lg:col-span-6 space-y-6">
                          <p className="text-sm text-neutral-300 leading-relaxed">{svc.desc}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Skills list */}
                            <div className="space-y-2.5">
                              <h4 className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                <Terminal size={10} /> core_stack
                              </h4>
                              <ul className="space-y-1.5">
                                {svc.skills.map((skill, sIdx) => (
                                  <li key={sIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                    {skill}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Applied projects */}
                            <div className="space-y-2.5">
                              <h4 className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                <Circle size={8} className="fill-red-400" /> project_practice
                              </h4>
                              <ul className="space-y-1.5">
                                {svc.projects.map((proj, pIdx) => (
                                  <li key={pIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                                    <ChevronDown size={12} className="text-red-500 flex-shrink-0" />
                                    {proj}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Code Editor Mockup */}
                        <div className="lg:col-span-6 w-full">
                          <div className="rounded-lg border border-white/5 bg-neutral-950 overflow-hidden text-xs flex flex-col font-mono max-h-[300px] shadow-lg relative">
                            {/* Window Controls */}
                            <div className="bg-black/90 px-3 py-2 border-b border-white/5 flex items-center justify-between text-neutral-500 text-[10px]">
                              <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>
                              </div>
                              <span>{svc.id === 'software' ? 'stack.cpp' : svc.id === 'ai' ? 'train.py' : 'Status.jsx'}</span>
                              <div className="w-6"></div>
                            </div>
                            
                            {/* Code lines */}
                            <div className="p-4 overflow-y-auto text-neutral-400 font-mono leading-relaxed max-h-[250px] scrollbar text-left bg-black/20 select-text">
                              <pre className="whitespace-pre-wrap select-text">
                                {svc.codeMock}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
