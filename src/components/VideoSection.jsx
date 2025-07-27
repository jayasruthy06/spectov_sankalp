export const VideoSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card aspect-video rounded-2xl overflow-hidden relative group">
          {/* Video placeholder with play button */}
          <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-glass-bg/40 backdrop-blur-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 neon-glow">
                <div className="w-0 h-0 border-l-[20px] border-l-neon-blue border-y-[12px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-lg text-muted-foreground">Company Video Goes Here</p>
              <p className="text-sm text-muted-foreground/70 mt-2">Click to play</p>
            </div>
          </div>
          
          {/* Overlay for interactive feedback */}
          <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};