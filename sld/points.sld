<?xml version="1.0" ?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <!-- Pisteet -->
  <NamedLayer>
    <Name>lipas:lipas_kaikki_pisteet</Name>
    <UserStyle>
      <FeatureTypeStyle>

        <Rule>
          <Name>3230 Uimapaikka</Name>
          <Title>3230 Uimapaikka</Title>
          <Abstract>3230 Uimapaikka</Abstract>
      
          <ogc:Filter>
            <ogc:Or>
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
          </ogc:Filter> 

          <PointSymbolizer>
             <Graphic>
               <Mark>
                 <WellKnownName>ttf://Webdings#0x57</WellKnownName>
                 <Fill>
                   <CssParameter name="fill">#AAAAAA</CssParameter>
                 </Fill>
               </Mark>
               <Size>16</Size>
             </Graphic>
          </PointSymbolizer>		  
		  
        </Rule>	  
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>