/**
 * AutoSupport AI: Neural Gateway Secure Bridge (AI.js)
 * VERSION: 2.5.0-SECURE
 * THIS SCRIPT IS CUSTOMIZED FOR: AutoSupport AI
 * 
 * SECURITY: API keys are handled server-side via Platform Gateway.
 * PRIVACY: This script only carries public business metadata.
 */
(function() {
    const _asId = document.currentScript.getAttribute('data-as-id');
    const _platformUrl = "https://suport-nine.vercel.app";
    
    // Neural configuration handshake
    window.AS_AI_CONFIG = {
        userId: _asId,
        authorized: true,
        businessInfo: {"name":"AutoSupport AI","address":"","phone":"","whatsapp":"","workingHours":"","about":"","email":"a@gmail.com","products":[],"services":[],"faqs":[]}, // Bundled data for 100% visibility
        timestamp: Date.now()
    };
    
    const _initNeuralWidget = function() {
        console.log("AutoSupport AI: Securing Neural Bridge...");

        // Ensure container exists with high priority styling
        let root = document.getElementById('as-ai-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'as-ai-root';
            document.body.appendChild(root);
        }
        
        // Force reset z-index and positioning for visibility
        root.style.position = 'relative';
        root.style.zIndex = '2147483647';

        // Load Global CSS Reset for Widget
        const style = document.createElement('style');
        style.innerHTML = '#as-ai-root { all: initial; }';
        document.head.appendChild(style);

        // Deploy Neural Engine
        const engine = document.createElement('script');
        engine.id = 'as-ai-engine-script';
        engine.src = _platformUrl + "/index.tsx"; 
        engine.type = "module";
        engine.async = true;
        
        engine.onload = function() {
           console.log("AutoSupport AI: Engine Deployed Successfully.");
        };

        engine.onerror = function() {
           console.error("AutoSupport AI: Critical Engine Failure. Check Platform Status.");
        };

        document.head.appendChild(engine);
    };

    // Initialize based on document state
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        _initNeuralWidget();
    } else {
        window.addEventListener('load', _initNeuralWidget);
    }
})();