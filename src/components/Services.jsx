import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Database, ChevronDown, Terminal, Play, Circle, X } from 'lucide-react'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/95">
      {/* Background glow balls */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-red-950/10 blur-3xl animated-glow-bg pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-red-950/5 blur-3xl animated-glow-bg pointer-events-none" style={{ animationDelay: '-4s' }}></div>

      {/* SVG Turbulence Filter Definitions */}
      <svg className="turbulent-svg-defs" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id="turbulent-displace"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.018"
              numOctaves="3"
              result="noise1"
              seed="1"
            >
              <animate attributeName="baseFrequency" values="0.015;0.022;0.015" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1"></feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.018"
              numOctaves="3"
              result="noise2"
              seed="1"
            >
              <animate attributeName="baseFrequency" values="0.022;0.015;0.022" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2"></feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.018"
              numOctaves="3"
              result="noise1"
              seed="2"
            >
              <animate attributeName="baseFrequency" values="0.012;0.026;0.012" dur="15s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3"></feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.018"
              numOctaves="3"
              result="noise2"
              seed="2"
            >
              <animate attributeName="baseFrequency" values="0.026;0.012;0.026" dur="15s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4"></feOffset>

            <feComposite
              in="offsetNoise1"
              in2="offsetNoise2"
              result="part1"
            ></feComposite>
            <feComposite
              in="offsetNoise3"
              in2="offsetNoise4"
              result="part2"
            ></feComposite>
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            ></feBlend>
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="B"
            ></feDisplacementMap>
          </filter>

          {/* Filter for hover/active state - slightly more dramatic displacement */}
          <filter id="turbulent-displace-active" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="4" result="noise1" seed="3">
              <animate attributeName="baseFrequency" values="0.02;0.028;0.02" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1"></feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.024" numOctaves="4" result="noise2" seed="3">
              <animate attributeName="baseFrequency" values="0.028;0.02;0.028" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2"></feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="combinedNoise"></feComposite>
            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B"></feDisplacementMap>
          </filter>
        </defs>
      </svg>

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

        {/* Expertise Grid - Responsive 3 Column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon

            return (
              <div key={svc.id} className="turbulent-container">
                <div className="turbulent-card-wrap">
                  <div className="turbulent-inner-wrap">
                    <div className="turbulent-border-outer">
                      <div className="turbulent-main-card"></div>
                    </div>
                    <div className="turbulent-glow-layer-1"></div>
                    <div className="turbulent-glow-layer-2"></div>
                  </div>

                  <div className="turbulent-overlay-1"></div>
                  <div className="turbulent-overlay-2"></div>
                  <div className="turbulent-bg-glow"></div>

                  <div className="turbulent-content-box">
                    <div className="turbulent-content-top">
                      <div className="turbulent-scrollbar-glass">Interactive</div>
                      
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 mt-4">
                        <Icon size={26} />
                      </div>

                      <h3 className="turbulent-title-text">{svc.title}</h3>
                    </div>

                    <hr className="turbulent-divider-line" />

                    <div className="turbulent-content-bottom">
                      <p className="turbulent-description-text">{svc.tagline}</p>
                      
                      <button 
                        className="turbulent-action-btn"
                        onClick={() => {
                          setSelectedService(svc)
                          setIsModalOpen(true)
                        }}
                      >
                        <span>View Details</span>
                        <Play size={10} className="fill-white ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-modal-overlay"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="glass-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Soft neon header ambient glow */}
              <div className="glass-modal-glow" />

              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between relative bg-black/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
                    {React.createElement(selectedService.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-mono text-white tracking-wide">{selectedService.title}</h3>
                    <p className="text-[10px] text-red-500 font-mono tracking-wider uppercase mt-0.5">{selectedService.id}_matrix.log</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 p-2.5 rounded-lg"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-grow select-text">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-text">
                  
                  {/* Left side: descriptions & bullet items */}
                  <div className="lg:col-span-6 space-y-6 select-text text-left">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">description</h4>
                      <p className="text-sm text-neutral-300 leading-relaxed font-sans">{selectedService.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-text">
                      {/* Core Stack Bullet list */}
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <Terminal size={10} /> core_stack
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.skills.map((skill, sIdx) => (
                            <li key={sIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical projects */}
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <Circle size={8} className="fill-red-400 text-red-400" /> project_practice
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.projects.map((proj, pIdx) => (
                            <li key={pIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                              <ChevronDown size={12} className="text-red-500 -rotate-90 flex-shrink-0" />
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Code editor sandbox mockup */}
                  <div className="lg:col-span-6 w-full select-text text-left">
                    <div className="rounded-xl border border-white/10 bg-neutral-950 overflow-hidden text-xs flex flex-col font-mono max-h-[360px] shadow-2xl relative">
                      {/* Window Controls */}
                      <div className="bg-black/90 px-4 py-3 border-b border-white/5 flex items-center justify-between text-neutral-500 text-[10px]">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>
                        </div>
                        <span className="text-neutral-400">{selectedService.id === 'software' ? 'stack.cpp' : selectedService.id === 'ai' ? 'train.py' : 'Status.jsx'}</span>
                        <div className="w-6"></div>
                      </div>
                      
                      {/* Scrollable code block */}
                      <div className="p-5 overflow-y-auto text-neutral-300 font-mono leading-relaxed max-h-[300px] scrollbar bg-black/40 select-text text-left">
                        <pre className="whitespace-pre-wrap select-text">
                          {selectedService.codeMock}
                        </pre>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 border-t border-white/5 bg-neutral-950/50 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  Close Sandbox
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
