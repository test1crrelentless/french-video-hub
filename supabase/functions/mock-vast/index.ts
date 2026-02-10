/**
 * MOCK VAST ENDPOINT
 * 
 * This edge function simulates an ad server returning a VAST XML response.
 * 
 * VAST (Video Ad Serving Template) is an IAB standard that defines how video
 * players communicate with ad servers. The flow is:
 * 
 * 1. Video player sends request to this endpoint
 * 2. This endpoint returns VAST XML with ad information
 * 3. Player parses the XML and plays the pre-roll video
 * 
 * In production tube sites, this would be a third-party ad network like:
 * - TrafficStars
 * - ExoClick
 * - JuicyAds
 * - etc.
 * 
 * They return VAST XML pointing to their ad creatives hosted on their CDN.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Mock ad creative - using a public test video (Big Buck Bunny trailer)
// In production, this would be the ad network's video URL
const MOCK_AD_VIDEO = 'https://storage.googleapis.com/gvabox/media/samples/stock.mp4';

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('[VAST] Received VAST request');

  // Generate a mock VAST 3.0 XML response
  // This structure matches what real ad networks return
  const vastXml = `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="3.0">
  <Ad id="mock-ad-001">
    <InLine>
      <!-- Ad system identification -->
      <AdSystem>TubeFlow Mock Ad Server</AdSystem>
      
      <!-- Human-readable ad title -->
      <AdTitle>Publicité de démonstration</AdTitle>
      
      <!-- Optional description -->
      <Description>Ceci est une publicité simulée pour tester l'intégration VAST</Description>
      
      <!-- Error tracking (would fire if ad fails to load) -->
      <Error><![CDATA[https://mock-tracking.example/error?reason=[ERRORCODE]]]></Error>
      
      <!-- Impression tracking (fires when ad starts) -->
      <Impression><![CDATA[https://mock-tracking.example/impression]]></Impression>
      
      <Creatives>
        <Creative id="creative-001" sequence="1">
          <Linear>
            <!-- Ad duration in HH:MM:SS format -->
            <Duration>00:00:10</Duration>
            
            <!-- Video tracking events -->
            <TrackingEvents>
              <Tracking event="start"><![CDATA[https://mock-tracking.example/start]]></Tracking>
              <Tracking event="firstQuartile"><![CDATA[https://mock-tracking.example/firstQuartile]]></Tracking>
              <Tracking event="midpoint"><![CDATA[https://mock-tracking.example/midpoint]]></Tracking>
              <Tracking event="thirdQuartile"><![CDATA[https://mock-tracking.example/thirdQuartile]]></Tracking>
              <Tracking event="complete"><![CDATA[https://mock-tracking.example/complete]]></Tracking>
            </TrackingEvents>
            
            <!-- Click tracking -->
            <VideoClicks>
              <ClickThrough><![CDATA[https://example.com/landing-page]]></ClickThrough>
              <ClickTracking><![CDATA[https://mock-tracking.example/click]]></ClickTracking>
            </VideoClicks>
            
            <!-- The actual video file(s) -->
            <!-- Real networks provide multiple bitrates/formats -->
            <MediaFiles>
              <MediaFile 
                id="media-001" 
                delivery="progressive" 
                type="video/mp4" 
                width="640" 
                height="360"
                bitrate="500"
                scalable="true"
                maintainAspectRatio="true">
                <![CDATA[${MOCK_AD_VIDEO}]]>
              </MediaFile>
            </MediaFiles>
          </Linear>
        </Creative>
      </Creatives>
      
      <!-- Extensions for additional data -->
      <Extensions>
        <Extension type="MockInfo">
          <Info>This is a mock VAST response for educational purposes</Info>
          <Timestamp>${new Date().toISOString()}</Timestamp>
        </Extension>
      </Extensions>
    </InLine>
  </Ad>
</VAST>`;

  console.log('[VAST] Returning mock VAST XML');

  return new Response(vastXml, {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-cache',
    },
  });
});
