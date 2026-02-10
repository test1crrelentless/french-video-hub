/**
 * AD INJECTION SCRIPT ENDPOINT
 * 
 * This edge function simulates how ad networks inject banner content.
 * 
 * HOW REAL AD NETWORKS WORK:
 * 
 * 1. Publisher adds a script tag: <script src="//adnetwork.com/banner.js"></script>
 * 2. Publisher adds placeholder divs: <div data-ad-slot="123"></div>
 * 3. The external script loads and:
 *    a) Finds all placeholder divs on the page
 *    b) Makes requests to the ad server for each slot
 *    c) Injects the returned HTML/iframe into each slot
 * 
 * This endpoint returns JavaScript that simulates step 3.
 * 
 * In production, this would be served by:
 * - Clickadu
 * - ExoClick
 * - AdSterra
 * - PropellerAds
 * - etc.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('[AD-INJECT] Script requested');

  // This JavaScript simulates what real ad network scripts do
  const injectionScript = `
/**
 * Mock Ad Network Injection Script
 * 
 * This script demonstrates how ad networks inject content into publisher pages.
 * It's a simplified version of what networks like Clickadu or ExoClick do.
 */

(function() {
  'use strict';
  
  console.log('[MockAdNetwork] Initializing ad injection...');
  
  // Configuration (normally would come from the network's servers)
  var config = {
    networkName: 'TubeFlow Mock Ads',
    version: '1.0.0',
    slots: {
      'top': {
        format: '728x90',
        type: 'leaderboard'
      },
      'bottom': {
        format: '300x250',
        type: 'medium-rectangle'
      },
      'sidebar': {
        format: '160x600',
        type: 'skyscraper'
      }
    }
  };
  
  /**
   * Find all ad slots on the page
   * Real networks look for their specific data attributes
   */
  function findAdSlots() {
    var slots = document.querySelectorAll('[data-ad-slot]');
    console.log('[MockAdNetwork] Found ' + slots.length + ' ad slots');
    return slots;
  }
  
  /**
   * Generate mock ad content for a slot
   * Real networks would fetch this from their ad servers
   */
  function generateAdContent(slotId) {
    var slotConfig = config.slots[slotId] || { format: 'unknown', type: 'banner' };
    
    return '<div style="' +
      'display: flex;' +
      'flex-direction: column;' +
      'align-items: center;' +
      'justify-content: center;' +
      'height: 100%;' +
      'background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);' +
      'border-radius: 8px;' +
      'padding: 16px;' +
      'box-sizing: border-box;' +
      '">' +
      '<div style="font-size: 14px; color: #ff6b35; font-weight: 600; margin-bottom: 8px;">' +
      '📺 ' + config.networkName +
      '</div>' +
      '<div style="font-size: 12px; color: #8b8b9a; margin-bottom: 4px;">' +
      'Format: ' + slotConfig.format + ' (' + slotConfig.type + ')' +
      '</div>' +
      '<div style="font-size: 10px; color: #5a5a6a;">' +
      'Slot ID: ' + slotId + ' | Injected by external JS' +
      '</div>' +
      '</div>';
  }
  
  /**
   * Inject ads into all found slots
   */
  function injectAds() {
    var slots = findAdSlots();
    
    slots.forEach(function(slot) {
      var slotId = slot.getAttribute('data-ad-slot');
      console.log('[MockAdNetwork] Injecting ad into slot: ' + slotId);
      
      // Simulate network delay
      setTimeout(function() {
        slot.innerHTML = generateAdContent(slotId);
        console.log('[MockAdNetwork] Ad injected into slot: ' + slotId);
        
        // Fire impression tracking (mock)
        trackImpression(slotId);
      }, Math.random() * 500 + 200);
    });
  }
  
  /**
   * Track ad impressions
   * Real networks send tracking pixels to their servers
   */
  function trackImpression(slotId) {
    console.log('[MockAdNetwork] Tracking impression for slot: ' + slotId);
    // In reality, this would be an image pixel or beacon request:
    // new Image().src = 'https://adnetwork.com/impression?slot=' + slotId;
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAds);
  } else {
    injectAds();
  }
  
  console.log('[MockAdNetwork] Script loaded successfully');
})();
`;

  return new Response(injectionScript, {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/javascript',
      'Cache-Control': 'max-age=3600',
    },
  });
});
