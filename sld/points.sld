<?xml version="1.0" ?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <!-- pisteet -->

  <NamedLayer>
    <Name>lipas:lipas_kaikki_pisteet</Name>  
    <UserStyle>
      <FeatureTypeStyle>


        <Rule>
          <Name>3000 Water Sports Facilities</Name>
          <Title>300</Title>
          <Abstract></Abstract>
      
          <ogc:Filter>
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3110</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3120</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3130</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3210</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3220</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3230</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>tyyppikoodi</ogc:PropertyName>
                <ogc:Literal>3240</ogc:Literal>
              </ogc:PropertyIsEqualTo>			  
            </ogc:Or>			  
          </ogc:Filter> 

 <PointSymbolizer>
   <Graphic>
     <Mark>
       <WellKnownName>circle</WellKnownName>
       <Fill>
         <CssParameter name="fill">#0000ff</CssParameter>
       </Fill>
     </Mark>
     <Size>6</Size>
   </Graphic>
 </PointSymbolizer>		  
		  
          <PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre"> 
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"
xlink:href="http://wiki.openstreetmap.org/w/images/9/9d/Swimming_blue.svg"/>
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>
                <ogc:Literal>22</ogc:Literal>
              </Size>
        

        
            </Graphic>
          </PointSymbolizer>
        </Rule>	    
		   
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>