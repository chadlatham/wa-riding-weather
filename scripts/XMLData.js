/ module.exports = ridingAreas;
// var xmlString = `<markers>
// <!--  Ahtanum State Forest (DNR)  -->
// <marker lat="46.517576" lng="-121.017341" label="Ahtanum State Forest" agency="DNR" html="<a href='http://www.dnr.wa.gov/RecreationEducation/Topics/RecreationPlanning/Pages/amp_rec_ahtanum.aspx' target='_blank'>Website</a> <br> <a href='http://www.dnr.wa.gov/Publications/amp_rec_ahtanum_state_forest_and_surrounding_area.pdf' target='_blank'>Vicinity Map (11x8.5; PDF)</a> <br> <a href='http://www.dnr.wa.gov/Publications/amp_rec_ahtanum_greendot_map_2010.pdf' target='_blank'>Green Dot Map (Roads open to OHVs) &nbsp;&nbsp; (11x17; PDF; DNR)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Beverly Sand Dunes (DNR)  -->
// <marker lat="46.831979" lng="-119.892786" label="Beverly Sand Dunes" agency="DNR" html="Size: 300 acres <br> <a href='0-maps/DNR-Beverly%20Sand%20Dunes.gif' target='_blank'>Map (5.5x6.75; GIF; DNR)</a> <br> <b><font color='red'>No alcohol allowed!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Bingen (City)  -->
// <marker lat="45.714794" lng="-121.466455" label="Bingen" agency="City" html="<a href='http://www.bingenwashington.org/wheeled-all-terrain-vehicles.htm#!wheeled-all-terrain-vehicles/c13ne' target='_blank'>Web page</a> <br> <a href='http://media.wix.com/ugd/aa480c_dfc4c9db94424d4ba76f3d829bb39336.pdf' target='_blank'>Wheeled All-Terrain Vehicles Ordinance (PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--  Bradley Trail (DNR)  -->
// <marker lat="46.232072" lng="-123.278488" label="Bradley Trail" agency="DNR" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_brad_06_full.pdf' target='_blank'>Complete (16.5x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_brad_06_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_brad_06_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a> <br><b><font color='red'>Day use only </font></b>">
// <category>ATV</category>
// </marker>
// <!--  Burnt Ridge MX Park (Private)  -->
// <marker lat="46.586231" lng="-122.589161" label="Burnt Ridge MX Park" agency="Private" html="<a href='http://www.burntridgemx.com/index2.htm' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Capitol State Forest (DNR)  -->
// <marker lat="46.952835" lng="-123.160375" maxZoom="10" label="Capitol State Forest" agency="DNR" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.50; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// <!--  Bordeaux Entrance  -->
// <marker lat="46.894185" lng="-123.082644" minZoom="11" label="Bordeaux Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  C-Line Entrance  -->
// <marker lat="46.926455" lng="-123.304200" minZoom="11" label="C-Line Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Cedar Creek Entrance  -->
// <marker lat="46.868691" lng="-123.263966" minZoom="11" label="Cedar Creek Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  County Line Entrance  -->
// <marker lat="47.057841" lng="-123.195900" minZoom="11" label="County Line Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Delphi Entrance  -->
// <marker lat="46.949605" lng="-123.057525" minZoom="11" label="Delphi Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Porter Creek Entrance  -->
// <marker lat="46.954035" lng="-123.285150" minZoom="11" label="Porter Creek Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Rock Candy Entrance  -->
// <marker lat="47.034025" lng="-123.096825" minZoom="11" label="Rock Candy Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Waddell Creek Entrance  -->
// <marker lat="46.926588" lng="-123.056355" minZoom="11" label="Waddell Creek Entrance" html="Total trails length: 89 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_capitol_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_capmapnu_may2.pdf' target='_blank'>Color (29x25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_full_08.pdf' target='_blank'>Color (10.25x16.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_top.pdf' target='_blank'>North half (color; 10.25x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_cap_forest_scan_lower.pdf' target='_blank'>South half (color; 10.25x8.5; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Trails closed to ORVs from Dec 1 to April 30</font></b>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Chelan (County)  -->
// <marker lat="47.421740" lng="-120.314951" label="Chelan" agency="County" html="<a href='http://www.co.chelan.wa.us/data/res2013-82_orvs_county_roads_10-15-13.pdf' target='_blank'>Ordinance (PDF)</a> <br> <a href='http://www.arcgis.com/home/webmap/viewer.html?webmap=7e391f873d004a54a2bc24cbb3d558b3&extent=-121.0858,47.2885,-119.6919,47.9163' target='_blank'>Map (interactive)</a>">
// <category>ATV</category>
// </marker>
// <!--  Chewelah (City)  -->
// <marker lat="48.276250" lng="-117.715515" label="Chewelah" agency="City" html="<a href='https://www.municode.com/library/wa/chewelah/codes/code_of_ordinances?nodeId=TIT10VETR_CH10.25OADVE.html' target='_blank'>Ordinance</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Clark County Arenacross (Private)  -->
// <marker lat="45.748286" lng="-122.669313" label="Clark County Arenacross" agency="Private" html="<a href='http://www.albanymx.net/?page_id=2034' target='_blank'>Website</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--
//  Colville (City): OHV ordinance for snow removal only repealed!
//     <marker lat="48.546548" lng="-117.905848" label="Colville" agency="City" html="&lt;a href='http://www.codepublishing.com/WA/Colville/Colville10/Colville1028.html' target='_blank'&gt;Ordinance&lt;/a&gt;   &lt;br&gt;   &lt;b&gt;&lt;font color='red'&gt;RESTRICTIONS: &lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;Snow plowing only!&lt;/font&gt;&lt;/b&gt;">
//       <category>ATV</category>
//     </marker>
//
// -->
// <!--  Colville National Forest (USFS)  -->
// <marker lat="48.601258" lng="-117.905200" maxZoom="8" label="Colville National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/colville/' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5339056.bmp' target='_blank'>CNF Vicinity Map (8x6.25; BMP; USFS)</a> <br> <a href='http://www.fs.usda.gov/detail/colville/maps-pubs/?cid=fsbdev3_035243' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp; (web page)</a>">
// <!--
//  Batey Bould Motorcycle Trails (trail #s 306, 306.1, 307 thru 312)
// -->
// <marker lat="48.371600" lng="-117.369000" minZoom="9" label="Batey Bould Motorcycle Trails" sublabel="(trail #s 306, 306.1, 307 thru 312)" html="Total trails length: 40 miles <br> <a href='http://www.fs.usda.gov/recarea/colville/recarea/?recid=67810' target='_blank'>Web page (USFS)</a> <br> <a href='0-maps/USFS-CNF-Batey%20Bould%20Motorcycle%20Trails.pdf' target='_blank'>Map (8.5x11; PDF; USFS MVUM extract)</a> <br> <a href='0-brochures/USFS-CNF-Batey-Bould%20Motorcycle%20Trails.pdf' target='_blank'>Brochure (8.5x11; PDF; USFS)</a>">
// <category>MC</category>
// </marker>
// <!--
//  LPO (Little Pend Oreille) Motorized Trail System (trail #s 140, 142 thru 146, 148, 148.1 and 151)
// -->
// <marker lat="48.610700" lng="-117.551655" minZoom="9" label="LPO (Little Pend Oreille) Motorized Trail System" sublabel="(trail #s 140, 142 thru 146, 148, 148.1 and 151)" html="Total trails length: 67.5 miles <br> <a href='http://www.fs.usda.gov/recarea/colville/recarea/?recid=68014' target='_blank'>Web page (USFS)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='0-maps/USFS-CNF-LPO%20Motorized%20Trail%20System.pdf' target='_blank'>Map (8.5x11; PDF; USFS MVUM extract)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_full.pdf' target='_blank'>Complete (11x17; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_n.pdf' target='_blank'>North half (11x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_s.pdf' target='_blank'>South half (11x8.5; PDF; DNR)</a> <br> <a href='0-brochures/USFS-CNF-LPO%20Motorized%20Trail%20System.pdf' target='_blank'>Brochure (11x8.5; PDF; USFS)</a> <br> The Little Pend Oreille and Vicinity Trail System (operated by DNR) <br> &nbsp;&nbsp;&nbsp; adjoins to the south of these trails">
// <category>MC</category>
// </marker>
// <!--  Mack/King Mtn Trail (trail #98)  -->
// <marker lat="48.676847" lng="-118.385058" minZoom="9" maxZoom="11" label="Mack/King Mtn Trail (trail #98)" html="Total trail length: 9.85 miles <br> <a href='USFS-CNF-98.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--  East trailhead  -->
// <marker lat="48.674788" lng="-118.336806" minZoom="12" label="   East Trailhead" html="Total trail length: 9.85 miles <br> <a href='USFS-CNF-98.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  West Trailhead  -->
// <marker lat="48.681181" lng="-118.442853" minZoom="12" label="   West Trailhead" html="Total trail length: 9.85 miles <br> <a href='USFS-CNF-98.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--
//  Middle Fork Calispel ATV Trails (trail #s 313 thru 315)
// -->
// <marker lat="48.248416" lng="-117.432036" minZoom="9" label="Middle Fork Calispel ATV Trails" sublabel="(trail #s 313 thru 315)" html="Total trails length: 12.0 miles <br> <a href='http://www.fs.usda.gov/recarea/colville/recreation/ohv/recarea/?recid=74111&actid=93' target='_blank'>Web page (USFS)</a> <br> <a href='0-maps/USFS-CNF-Middle%20Fork%20Calispel%20ATV%20Trails.pdf' target='_blank'>Map (8.5x11; PDF; USFS MVUM extract)</a> <br> <b><font color='red'>RESTRICTIONS:<br>&nbsp;&nbsp;&nbsp;Open to vehicles 50" or less in width</font></b>">
// <category>ATV</category>
// </marker>
// <!--  Owl Mountain Trail (trail #102)  -->
// <marker lat="48.956230" lng="-118.291461" minZoom="9" maxZoom="11" label="Owl Mountain Trail (trail #102)" html="Total trail length: 6.7 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--  South trailhead  -->
// <marker lat="48.934858" lng="-118.293027" minZoom="12" label="   South Trailhead" html="Total trail length: 6.7 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Northeast Trailhead  -->
// <marker lat="48.967932" lng="-118.249429" minZoom="12" label="   Northeast Trailhead" hml="Total trail length: 6.7 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  South Huckleberry Mountain Trail (trail #12110)  -->
// <marker lat="48.543713" lng="-118.275225" minZoom="9" maxZoom="11" label="South Huckleberry Mountain Trail (trail #12110)" html="Total trail length: 5.1 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--  North trailhead  -->
// <marker lat="48.529983" lng="-118.309716" minZoom="12" label="   North Trailhead" html="Total trail length: 5.1 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  South Trailhead  -->
// <marker lat="48.556713" lng="-118.254861" minZoom="12" label="   South Trailhead" hml="Total trail length: 5.1 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Thompson Ridge Trail (trail #107)  -->
// <marker lat="48.746711" lng="-118.224855" minZoom="9" label="Thompson Ridge Trail (trail #107)" html="Total trail length: 5.0 miles">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Twin Sisters Trail (#109)  -->
// <marker lat="48.699591" lng="-118.390677" minZoom="9" maxZoom="11" label="Twin Sisters Trail (trail #109)" html="Total trail length: 7.5 miles <br> <a href='USFS-CNF-109.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--  East trailhead  -->
// <marker lat="48.713167" lng="-118.339950" minZoom="12" label="   East Trailhead" html="Total trail length: 7.5 miles <br> <a href='USFS-CNF-109.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  West Trailhead  -->
// <marker lat="48.681581" lng="-118.442853" minZoom="12" label="   West Trailhead" hml="Total trail length: 7.5 miles <br> <a href='USFS-CNF-109.htm' target='_blank'>Web page (WOHVA)</a> <br> <b><font color='red'>ATV and dirt bikes: Recommended for skilled riders only!</font></b> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Unnamed Trail (trail #12060)  -->
// <marker lat="48.515977" lng="-118.274375" minZoom="9" label="Unnamed Trail (trail #12060)" html="Total trail length: 2.3 miles <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  US Mountain Trail (trail #12600)  -->
// <marker lat="48.714086" lng="-118.444011" minZoom="9" label="US Mountain Trail (trail #12600)" html="Total trail length: 2.4 miles <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Trail open April 1st thru November 30th</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Conconully (Town)  -->
// <marker lat="48.557181" lng="-119.750099" label="Conconully" agency="Town" html="<a href='http://www.conconully.com/all-terrain-vehicles' target='_blank'>Web page</a> <br> <a href='http://www.ncatvclub.org/pdf/ORDINANCE%20NO.%20274%20ATV.pdf' target='_blank'>Ordinance (PDF)</a> <br> &nbsp;&nbsp;&nbsp; Link courtesy of the <a href='http://www.ncatvclub.org/' target='_blank'>North Central ATV Club Washington</a> <br> <a href='http://issuu.com/omakchronicle/docs/2013_atv_guide?e=177844' target='_blank'>Okanogan County 2013 ATV Guide</a>">
// <category>ATV</category>
// </marker>
// <!--  Douglas County  -->
// <marker lat="47.645605" lng="-120.071425" label="Douglas" agency="County" html="<a href='http://www.douglascountywa.net/departments/commissioners/ordinances/documents/ORDTLS14-02-13B.pdf' target='_blank'>Ordinance (PDF)</a> <br> <a href='http://www.douglascountywa.net/departments/TLS/gis/pdf/DC_ATV_OVR_Final.pdf' target='_blank'>Map - Douglas County (36x36; PDF; County)</a> <br> <a href='http://www.douglascountywa.net/departments/TLS/gis/pdf/GEWA_ATV_OVR_Final.pdf' target='_blank'>Map - Greater East Wenatchee Area (36x36; PDF; County)</a>">
// <category>ATV</category>
// </marker>
// <!--
//   Duvall (City)
// Done? Supposedly sometime after Feb 27, 2014
// -->
// <!--  East Wenatchee (City)  -->
// <marker lat="47.410313" lng="-120.251655" label="East Wenatchee" agency="City" html="<a href='http://www.codepublishing.com/wa/eastwenatchee/html/EastWenatchee10/EastWenatchee1060.html#10.60' target='_blank'>Ordinance</a>">
// <category>ATV</category>
// </marker>
// <!--
//  Eddieville Sports Park (Starvation Ridge)  (Private)
// -->
// <marker lat="45.736983" lng="-120.849155" label="Eddieville Sports Park" agency="Private" note="(Starvation Ridge)" html="<a href='http://www.overthebarsgang.com/' target='_blank'>Web page</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Elbe Hills OHV Trail System (DNR)  -->
// <marker lat="46.786208" lng="-122.077502" label="Elbe Hills OHV Trail System" agency="DNR" html="No maps">
// <category>4x4</category>
// <category>MC</category>
// </marker>
// <!--  Ephrata Raceway Park (Private)  -->
// <marker lat="47.299750" lng="-119.542038" label="Ephrata Raceway Park" agency="Private" html="<a href='http://www.ephrataracewaypark.com/' target='_blank'>Website</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Evergreen Speedway (Private)  -->
// <marker lat="47.866941" lng="-121.981000" label="Evergreen Speedway" agency="Private" html="<a href='http://evergreenmotocrosspark.com/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Flodelle Creek (DNR)  -->
// <marker lat="48.544713" lng="-117.572908" label="Flodelle Creek" agency="DNR" html="No maps">
// <category>MC</category>
// </marker>
// <!--  Garfield (County)  -->
// <marker lat="46.473985" lng="-117.520116" label="Garfield" agency="County" html="<a href='http://www.co.garfield.wa.us/recreation' target='_blank'>Web page</a> <br> <a href='http://www.co.garfield.wa.us/sites/co.garfield.wa.us/files/ORD%2013868.pdf' target='_blank'>Ordinance (PDF)</a> <br> <a href='http://www.co.garfield.wa.us/sites/co.garfield.wa.us/files/Image/ORV%20Vehicle%20Access%20Map.pdf' target='_blank'>Map (8.5x11; PDF; County)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Gifford-Pinchot National Forest (USFS)  -->
// <marker lat="45.657938" lng="-122.564213" maxZoom="8" label="Gifford-Pinchot National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/main/giffordpinchot/home' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fsbdev3_004824.pdf' target='_blank'>GPNF Vicinity Map (11x17; PDF; USFS)</a> <br> <a href='http://www.fs.usda.gov/detailfull/giffordpinchot/home/?cid=stelprdb5289777&width=full' target='_blank'>Motor Vehicle Use Maps (MVUMs) Atlas web page</a> <br> <a href='http://www.fs.usda.gov/activity/giffordpinchot/recreation/ohv/?recid=31178&actid=93' target='_blank'>OHV Trail Riding (list of trails) &nbsp;&nbsp; (web page)</a>">
// <!--  Cowlitz Valley Vicinity  -->
// <marker lat="46.534100" lng="-121.933891" minZoom="9" label="Cowlitz Valley Vicinity" html="<a href='http://www.fs.usda.gov/recarea/giffordpinchot/recreation/ohv/recarea/?recid=31180&actid=93' target='_blank'>Cowlitz Valley Vicinity (web page)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5160427.jpg' target='_blank'>Map (13x11.5; JPG; USFS)</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Mt. Adams Vicinity  -->
// <marker lat="46.000158" lng="-121.544480" minZoom="9" label="Mt. Adams Vicinity" html="<a href='http://www.fs.usda.gov/recarea/giffordpinchot/recreation/ohv/recarea/?recid=31184&actid=93' target='_blank'>Mt. Adams Vicinity (web page and map)</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Mount St. Helens Surrounding area: No OHV trails  -->
// </marker>
// <!--
//  Gold Bar (City)
// 47.857369
// 121.702355
// Ordinance 664 ?
// URL: ? ? ?
// -->
// <!--  Grant County ORV Park: See Moses Lake Sand Dunes  -->
// <!--  Green Mountain State Forest (DNR)  -->
// <marker lat="47.580783" lng="-122.788438" maxZoom="12" label="Green Mountain State Forest" agency="DNR" html="<a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_green_mountain_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_full.pdf' target='_blank'>Complete (17x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a>">
// <category>MC</category>
// <!--  Gold Creek Entrance  -->
// <marker lat="47.556919" lng="-122.827305" minZoom="13" label="Gold Creek Entrance" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_full.pdf' target='_blank'>Complete (17x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a>">
// <category>MC</category>
// </marker>
// <!--  Wildcat Entrance  -->
// <marker lat="47.600791" lng="-122.788347" minZoom="13" label="Wildcat Entrance" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_full.pdf' target='_blank'>Complete (17x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_green_08_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a>">
// <category>MC</category>
// </marker>
// </marker>
// <!--
//  Hannegan Speedway (Mt. Baker Motorcycle Club)  (Private)
// -->
// <marker lat="48.793505" lng="-122.442605" label="Hannegan Speedway" agency="Private" html="<a href='http://www.hanneganspeedway.us/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Horn Rapids MX Park (Private)  -->
// <marker lat="46.352222" lng="-119.356388" label="Horn Rapids MX Park" agency="Private" html="<a href='http://www.hornrapidsmx.com/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Idaho Panhandle National Forests (USFS)  -->
// <marker lat="47.714919" lng="-116.802447" maxZoom="8" label="Idaho Panhandle National Forests" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/ipnf' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/wps/portal/fsinternet/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gjAwhwtDDw9_AI8zPwhQoY6IeDdGCqCPOBqwDLG-AAjgb6fh75uan6BdnZaY6OiooA1tkqlQ!!/dl3/d3/L2dJQSEvUUt3QS9ZQnZ3LzZfMjAwMDAwMDBBODBPSEhWTjJNMDAwMDAwMDA!/?navtype=BROWSEBYSUBJECT&cid=stelprdb5144787&navid=360000000000000&pnavid=null&ss=110104&position=Not%2520Yet%2520Determined.Html&ttype=detail&pname=Idaho%2520Panhandle%2520National%2520Forests-%2520Maps' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp;&nbsp; (web page)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--
//  Kaniksu National Forest/Priest Lake Ranger District Office (USFS)
// -->
// <marker lat="48.574730" lng="-116.957802" minZoom="9" label="Kaniksu National Forest:" sublabel="Priest Lake Ranger District Office" html="<a href='http://www.fs.usda.gov/ipnf' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/wps/portal/fsinternet/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gjAwhwtDDw9_AI8zPwhQoY6IeDdGCqCPOBqwDLG-AAjgb6fh75uan6BdnZaY6OiooA1tkqlQ!!/dl3/d3/L2dJQSEvUUt3QS9ZQnZ3LzZfMjAwMDAwMDBBODBPSEhWTjJNMDAwMDAwMDA!/?navtype=BROWSEBYSUBJECT&cid=stelprdb5144787&navid=360000000000000&pnavid=null&ss=110104&position=Not%2520Yet%2520Determined.Html&ttype=detail&pname=Idaho%2520Panhandle%2520National%2520Forests-%2520Maps' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp; (web page)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--
//  Ilwaco (City)
// 46.308866
// 124.043355
// Ordinance 826 ?
// URL: ? ? ?
// -->
// <!--  Inland Empire Paper (IEP) Company (Private)  -->
// <marker lat="47.921416" lng="-117.042265" label="Inland Empire Paper (IEP) Company" agency="Private" html="<a href='http://www.iepco.com/recreation.htm' target='_blank'>Website (IEP)</a> <br> <a href='http://www.iepco.com/images/IEP_RecUseMap_08.pdf' target='_blank'>IEP Recreational Use Map (17x11; PDF; IEP)</a> <br> <a href='http://www.quality-service-inc.com/inland-empire-paper-company/maps/' target='_blank'>Additional Maps (web page; IEP)</a> <br> <a href='http://www.iepco.com/images/IEPRecUse_RegsSept09.pdf' target='_blank'>Brochure (5.5x8.5; PDF; IEP)</a> <br> <b><font color='red'>IEP Access Permit required!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Ione (Town)  -->
// <marker lat="48.740938" lng="-117.417884" label="Ione" agency="Town" html="<a href='0-ordinances/Ione%20(Town).pdf' target='_blank'>Ordinance (5.25x7.75; PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--
//  Jones Creek Trail System (DNR): See Yacolt Burn State Forest
// -->
// <!--  Juniper Dunes (BLM)  -->
// <marker lat="46.314200" lng="-118.951850" label="Juniper Dunes" agency="BLM" html="Acres: 3,920 acres <br> <a href='http://www.blm.gov/or/resources/recreation/site_info.php?siteid=270' target='_blank'>Web page (BLM)</a> <br> <a href='http://www.blm.gov/or/resources/recreation/files/brochures/juniper_2010.pdf' target='_blank'>Map (8.5x11; PDF; BLM)</a> <br> <a href='http://www.gpo.gov/fdsys/pkg/FR-2005-08-18/pdf/05-16162.pdf' target='_blank'>Supplemental Rules for Oregon and Washington (PDF; BLM)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Kettle Falls (City)  -->
// <marker lat="48.610832" lng="-118.056452" label="Kettle Falls" agency="City" html="<a href='http://www.kettle-falls.com/attachments/article/92/Chapter_10.88.pdf' target='_blank'>Ordinance (PDF)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Kittitas (County)  -->
// <marker lat="46.992325" lng="-120.548463" label="Kittitas" agency="County" html="<a href='http://www.co.kittitas.wa.us/uploads/bocc/ordinances/2014-006-ordinance.pdf' target='_blank'>Ordinance (PDF)</a> <br> <a href='http://kitcogis.maps.arcgis.com/apps/Panels/index.html?appid=cb656bbe08e54d5ab6462303bbc74a2e' target='_blank'>Interactive Map</a> <br> <font color='red'> &nbsp;&nbsp;&nbsp; (shown as proposed routes)</font></b>">
// <category>ATV</category>
// </marker>
// <!--  Lakeview Ranch (BLM) / Pacific Lake  -->
// <marker lat="47.421330" lng="-118.741940" label="Lakeview Ranch" agency="BLM" html="Total trails length: 7.0 miles <br> <a href='http://www.blm.gov/or/resources/recreation/site_info.php?siteid=275' target='_blank'>Web page (BLM)</a> <br> <a href='http://www.blm.gov/or/resources/recreation/files/brochures/lakeview_ranch_kiosk_0109.pdf' target='_blank'>Map (19x24; PDF; BLM)</a> <br> <a href='http://www.gpo.gov/fdsys/pkg/FR-2005-08-18/pdf/05-16162.pdf' target='_blank'>Supplemental Rules for Oregon and Washington (PDF; BLM)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Road use only; no cross-country riding allowed!</font></b>">
// <category>ATV</category>
// </marker>
// <!--   Lewis (County)
// In work
//  -->
// <!--  Liberty Lake Regional Park (County)  -->
// <marker lat="47.636990" lng="-117.060591" maxZoom="11" label="Liberty Lake Regional Park" agency="County" html="<a href='http://www.spokanecounty.org/parks/content.aspx?c=1868' target='_blank'>Website (Spokane County)</a> <br> <a href='http://www.spokanecounty.org/loaddoc.aspx?docid=5973' target='_blank'>Map (11x17; PDF; Spokane County)</a>">
// <category>ATV</category>
// <category>MC</category>
// <!--  Liberty Lake ORV Park (County)  -->
// <marker lat="47.637594" lng="-117.053936" minZoom="12" label="Liberty Lake ORV Park" html="Total trails length: 16.0 miles <br> <a href='http://www.spokanecounty.org/parks/content.aspx?c=1868' target='_blank'>Website (Spokane County)</a> <br> <a href='http://www.spokanecounty.org/loaddoc.aspx?docid=5973' target='_blank'>Map (11x17; PDF; Spokane County)</a> <br> <a href='http://www.spokanecounty.org/loaddoc.aspx?docid=3509' target='_blank'>Brochure (12.5x8.75; PDF; Spokane County)</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--
//  Little Pend Oreille and Vicinity Trail System (DNR)
// -->
// <marker lat="48.604130" lng="-117.550847" label="Little Pend Oreille and Vicinity Trail System" agency="DNR" html="<a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_na_little_pend.aspx' target='_blank'>Web page (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_full.pdf' target='_blank'>Complete (11x17; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_n.pdf' target='_blank'>North half (11x8.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_little_pend_01_s.pdf' target='_blank'>South half (11x8.5; PDF; DNR)</a> <br> The LPO (operated by the USFS) <br> &nbsp;&nbsp;&nbsp; adjoins to the north of these trails">
// <category>MC</category>
// </marker>
// <!--  Moses Lake Sand Dunes (Grant County ORV Park)  -->
// <marker lat="47.061713" lng="-119.321405" label="Moses Lake Sand Dunes" agency="County" sublabel="(Grant County ORV Park)" html="<a href='http://www.grantcountywa.gov/SHERIFF/SpecOps/ORV/' target='_blank'>Web page (Grant County Sheriff)</a> <br> <a href='http://www.grantcountywa.gov/SHERIFF/SpecOps/ORV/Moses_Lake_Sand_Dunes.htm' target='_blank'>Interactive Map</a> <br> <a href='http://www.grantcountywa.gov/SHERIFF/MISC/PDF/Sand-Dunes/2010-ML-Sand-Dunes-Map.pdf' target='_blank'>Map (8.5 x 11; PDF; Grant County Sheriff)</a> <br> <a href='http://www.grantcountywa.gov/SHERIFF/MISC/PDF/Sand-Dunes/2010-ML-Sand-Dunes-Brochure.pdf' target='_blank'>Brochure (PDF; Grant County Sheriff; PDF)</a> <br> <b><font color='red'>No alcohol allowed!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Mt. Baker-Snoqualmie National Forest USFS)  -->
// <marker lat="47.978172" lng="-122.207175" maxZoom="8" label="Mt. Baker-Snoqualmie National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/mbs/' target='_blank'>Website (USFS)</a> <br> <a href='https://fs.usda.gov/Internet/FSE_DOCUMENTS/fsbdev7_001552.pdf' target='_blank'>MBS Vicinity Map (8.5x11; PDF; USFS)</a> <br> <a href='http://www.fs.usda.gov/detail/mbs/maps-pubs/?cid=stelprdb5160280' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp; (web page)</a> <br> <a href='http://www.fs.usda.gov/activity/mbs/recreation/ohv/?recid=17520&actid=93' target='_blank'>OHV Trail Riding (list of trails) &nbsp;&nbsp; (web page)</a>">
// <!--  Mather Memorial Parkway (SR 410)  -->
// <marker lat="47.105128" lng="-121.593547" minZoom="9" label="Mather Memorial Parkway (SR 410)" html="<a href='http://www.fs.usda.gov/recarea/mbs/recreation/ohv/recarea/?recid=18086&actid=93' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5158103.gif' target='_blank'>Recreation Area Map (10x11; GIF; USFS)</a>">
// <category>MC</category>
// <!--  Evans Creek Trailhead  -->
// <marker lat="46.940983" lng="-121.940636" minZoom="9" label="   Evans Creek Trailhead" html="Total trails length: 40.0 miles <br> <a href='http://www.fs.usda.gov/recarea/mbs/recreation/ohv/recarea/?recid=80335&actid=93' target='_blank'>Web page (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5158103.gif' target='_blank'>Recreation Area Map (10x11; GIF; USFS)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Naches Trail #1175 (West trailhead)  -->
// <marker lat="47.093654" lng="-121.404657" minZoom="9" label="   Naches Trail (trail #1175)" sublabel="   West trailhead" html="Trail length (MBS NF): 5.7 miles <br> <a href='http://www.fs.usda.gov/recarea/mbs/recreation/ohv/recarea/?recid=18146&actid=93' target='_blank'>Web page (USFS)</a> <br> Connects with OkaWen NF Trail #684 <br> <font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp; Open to all from FS Road 7065 to Naches Pass <br> &nbsp;&nbsp;&nbsp; Trail closed to motorized use November 15 through July 15 </font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Mt. Baker Highway (SR 542)  -->
// <marker lat="48.907155" lng="-121.809847" minZoom="9" label="Mt. Baker Highway (SR 542)" agency="USFS" html="<a href='http://www.fs.usda.gov/recarea/mbs/recreation/ohv/recarea/?recid=17522&actid=93' target='_blank'>Webpage (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5158089.gif' target='_blank'>Recreation Area Map (10x7.5; GIF; USFS)</a>">
// <category>MC</category>
// </marker>
// </marker>
// <!--  Northern Olympic Peninsula (DNR)  -->
// <marker lat="48.118108" lng="-123.431680" maxZoom="10" label="Northern Olympic Peninsula" agency="DNR" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_n_oly_pen_cent.pdf' target='_blank'>Central Area (8x10.25; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_n_oly_pen_rt.pdf' target='_blank'>Right Area (7.25x10.25; PDF; DNR)</a>">
// <category>MC</category>
// <!--  Foothills Trailhead  -->
// <marker lat="48.048755" lng="-123.480280" minZoom="11" label="Foothills Trailhead" html="<a href='http://www.dnr.wa.gov/Publications/eng_rms_n_oly_pen_rt.pdf' target='_blank'>Map (7.25x10.25; PDF; DNR)</a>">
// <category>MC</category>
// </marker>
// <!--  Sadie Creek Trailhead  -->
// <marker lat="48.134058" lng="-123.906255" minZoom="11" label="Sadie Creek Trailhead" html="Total trails length: 30.0 miles <br> <a href='http://www.dnr.wa.gov/Publications/eng_rms_n_oly_pen_cent.pdf' target='_blank'>Map (8x10.25; PDF; DNR)</a>">
// <category>4x4</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Northport (Town)  -->
// <marker lat="48.916126" lng="-117.781630" label="Northport" agency="Town" html="<a href='0-ordinances/Northport%20(Town).pdf' target='_blank'>Ordinance (5x8.5; PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--  Okanogan (City)  -->
// <marker lat="48.331536" lng="-119.603630" label="Okanogan" agency="City" html="<a href='http://www.codepublishing.com/wa/okanogan/html/okanogan10/Okanogan1045.html' target='_blank'>Ordinance</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Okanogan (County)  -->
// <marker lat="48.394466" lng="-119.559955" label="Okanogan" agency="County" html="<a href='http://okanogancounty.org/PW/recreation_information.htm' target='_blank'>Website (Recreation Information; links to routes/maps)</a> <br> <a href='http://okanogancounty.org/PW/Recreation_Information_Items/Ordinance%20%202013-8.pdf' target='_blank'>Ordinance 2013-8 (PDF; County)</a> <br> <a href='http://okanogancounty.org/PW/Recreation_Information_Items/Ordinance%202014-7.pdf' target='_blank'>Ordinance 2014-7 (PDF; County)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Okanogan-Wenatchee National Forest (USFS)  -->
// <marker lat="47.469177" lng="-120.337388" maxZoom="8" label="Okanogan-Wenatchee National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/main/okawen' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5311775.pdf' target='_blank'>OkaWen Vicinity Map (10.5x7; PDF; USFS)</a> <br> Special Recreation Trail Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5313092.pdf' target='_blank'>Devils Gulch and Mission Ridge area (11x8.5; PDF; USFS)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5313093.pdf' target='_blank'>Lower Chiwawa - Mad River - Entiat - Chelan area (11x8.5; PDF; USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5317428.pdf' target='_blank'>Cle Elum RD ORV Trails - West (8.5x11; PDF; USFS)</a> <br> <a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5317431.pdf' target='_blank'>Cle Elum RD ORV Trails - East (8.5x11; PDF; USFS)</a> <br> <a href='http://www.fs.usda.gov/detail/okawen/maps-pubs/?cid=stelprdb5306482' target='_blank'>Methow Valley and Tonasket Ranger District Travel Plan Maps (web page)</a> <br> <a href='http://www.fs.usda.gov/activity/okawen/recreation/ohv/?recid=57113&actid=93' target='_blank'>OHV Trail Riding (list of trails) &nbsp; (web page)</a>">
// <!--  Cle Elum RD ORV Trails - East  -->
// <marker lat="47.195336" lng="-120.920266" minZoom="9" label="Cle Elum RD ORV Trails - East" html="<a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5317431.pdf' target='_blank'>Cle Elum RD ORV Trails - East map (8.5x11; PDF; USFS)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Cle Elum RD ORV Trails - West  -->
// <marker lat="47.195336" lng="-120.970266" minZoom="9" label="Cle Elum RD ORV Trails - West" html="<a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5317428.pdf' target='_blank'>Cle Elum RD ORV Trails - West map (8.5x11; PDF; USFS)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Devils Gulch and Mission Ridge Area  -->
// <marker lat="47.315747" lng="-120.390194" minZoom="9" label="Devils Gulch and Mission Ridge area" html="<a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5313092.pdf' target='_blank'>Devils Gulch and Mission Ridge area map (11x8.5; PDF; USFS)</a>">
// <category>MC</category>
// </marker>
// <!--  Lower Chiwawa - Mad River - Entiat - Chelan Area  -->
// <marker lat="47.816744" lng="-120.715316" minZoom="9" label="Lower Chiwawa - Mad River - Entiat - Chelan area" html="<a href='http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5313093.pdf' target='_blank'>Lower Chiwawa - Mad River - Entiat - Chelan area map (11x8.5; PDF; USFS)</a>">
// <category>MC</category>
// </marker>
// <!--
//  Methow Valley and Tonasket Ranger District Travel Plan Maps (web page)
// -->
// <marker lat="48.346522" lng="-120.077736" minZoom="9" label="Methow Valley and Tonasket Ranger District Travel Plan Maps" html="<a href='http://www.fs.usda.gov/detail/okawen/maps-pubs/?cid=stelprdb5306482' target='_blank'>Methow Valley and Tonasket Ranger District Travel Plan Maps (web page)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Naches Trail #684 (East trailhead)  -->
// <marker lat="47.089133" lng="-121.281483" minZoom="9" label="   Naches (trail #684)" sublabel="   East trailhead" html="Trail length (OkaWen NF): 7.2 miles <br> <a href='http://www.fs.usda.gov/recarea/okawen/recreation/recarea/?recid=74350&actid=93' target='_blank'>Web page (USFS)</a> <br> Connects with Mt. Baker-Snoqualmie NF Trail #1175 <br> <font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp; Trail closed April 1 to June 15 unless posted open <br> &nbsp;&nbsp;&nbsp; OHV tag or street licensed <br> &nbsp;&nbsp;&nbsp; Spark Arrestor <br> &nbsp;&nbsp;&nbsp; White River RD closes access at Government Meadows west from Nov 15 – Jul 15 <br> &nbsp;&nbsp;&nbsp; Check with White River RD in Enumclaw ((360) 825-6585) for latest information </font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Olympic National Forest (USFS)  -->
// <marker lat="47.031411" lng="-122.942791" label="Olympic National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/olympic' target='_blank'>Website (USFS)</a> <br> <a href='http://www.nps.gov/pwr/customcf/apps/maps/showmap.cfm?alphacode=olym&parkname=Olympic%20National%20Park' target='_blank'>OLNF Map (interactive; USFS)</a> <br> <a href='http://www.fs.usda.gov/detail/olympic/maps-pubs/?cid=stelprdb5353847' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp;&nbsp; (web page)</a>">
// <category>MC</category>
// </marker>
// <!--  Oroville (City)  -->
// <marker lat="48.939311" lng="-119.435155" label="Oroville" agency="City" html="<a href='http://www.oroville-wa.com/index.php/download_file/view/186/162/' target='_blank'>Ordinance (PDF)</a> <br> &nbsp;&nbsp;&nbsp;Scroll down to Chapter 10.26 - Off Road Vehicles (ORVs)">
// <category>ATV</category>
// </marker>
// <!--  Pacific Lake (BLM) - see Lakeview Ranch  -->
// <!--  Pacific Raceways (Private)  -->
// <marker lat="47.322327" lng="-122.150761" label="Pacific Raceways" agency="Private" html="<a href='http://www.pacificraceways.com/Index.aspx' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Pateros (City)  -->
// <marker lat="48.054983" lng="-119.899675" label="Pateros" agency="City" html="<a href='http://www.codepublishing.com/wa/pateros/html/Pateros10/Pateros1008.html#10.08' target='_blank'>Ordinance</a>">
// <category>ATV</category>
// </marker>
// <!--  Pend Oreille (County)  -->
// <marker lat="48.180055" lng="-117.043283" label="Pend Oreille" agency="County" html="<a href='http://www.pendoreilleco.org/documents/Commissioners/Off-Road%20Vehicle%20Ordinance%202006-2.pdf' target='_blank'>Off-Road Vehicle Ordinance (2006-2) &nbsp;&nbsp; (PDF)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.pendoreilleco.org/documents/Commissioners/Ordinance%202013-2%20Wheeled%20All-Terrain%20Vehicles.pdf' target='_blank'>Wheeled All-Terrain Vehicle Ordinance (2013-2) &nbsp;&nbsp; (PDF)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Pomeroy (City)  -->
// <marker lat="46.474755" lng="-117.622911" label="Pomeroy" agency="City" html="<a href='http://www.co.garfield.wa.us/sites/co.garfield.wa.us/files/ORD%2013868.pdf' target='_blank'>Ordinance (PDF; County)</a> <br> &nbsp;&nbsp;&nbsp;Same as Garfield County except speed limit in Pomeroy City (25 MPH) <br> <a href='http://www.co.garfield.wa.us/sites/co.garfield.wa.us/files/Image/City%20ORV%20Vehicle%20Access%20Map.pdf' target='_blank'>ORV Access Map (11x8.5; PDF; County)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Prosser (City)  -->
// <marker lat="46.206147" lng="-119.768311" label="Prosser" agency="City" html="<a href='http://cityofprosser.com/vertical/sites/%7B713B5BA4-A760-48C5-8E69-0178B23DA0F8%7D/uploads/14-2876.pdf' target='_blank'>Ordinance (PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--  Raymond (City)  -->
// <marker lat="46.682402" lng="-123.730552" label="Raymond" agency="City" html="<a href='http://www.codepublishing.com/wa/Raymond/html/raymond10/Raymond1066.html#10.66' target='_blank'>Ordinance</a>">
// <category>ATV</category>
// </marker>
// <!--  Reiter Foothills Forest (DNR)  -->
// <marker lat="47.829925" lng="-121.603291" label="Reiter Foothills Forest" agency="DNR" html="Total trails length (est): 0.5 miles (4x4); 2 miles (ATV); 4 miles (single-track/motorcycle) <br> <a href='http://www.dnr.wa.gov/RecreationEducation/Topics/RecreationPlanning/Pages/amp_rec_reiter_foothills.aspx' target='_blank'>Website</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_overall_map.pdf' target='_blank'>Reiter Overall Map (17x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_4x4_map.pdf' target='_blank'>4x4 (17x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_atv_map.pdf' target='_blank'>ATV (17x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_motorcycle_map.pdf' target='_blank'>Single Track Motorcycle (17x11; PDF; DNR)</a> <br> <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_motorized_trail_rules.pdf' target='_blank'>Motorized Trail Rules (18.75x26.75; PDF; DNR)</a> <br> <a href='http://www.dnr.wa.gov/Publications/amp_rec_reiter_4x4_tech_guidelines.pdf' target='_blank'>4x4 Technical Trail Guidelines (18.75x26.75; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS: Trails open Saturdays and Sundays 9 AM - 5 PM only! </font></b> <br> <b><font color='red'>SPECIAL NOTE: Reiter Foothills Forest is a "work in progress"; <br> &nbsp;&nbsp;&nbsp; check website (above) for latest details BEFORE you head out! </font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Republic (City)  -->
// <marker lat="48.647692" lng="-118.738050" label="Republic" agency="City" html="<a href='http://www.republicwa.org/OHVordinance.pdf' target='_blank'>Ordinance (PDF)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.republicwa.org/OHVroute.pdf' target='_blank'>Map (Hand-drawn; 8.5x11; PDF; City)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.republicwa.org/OHVmapOverlay.pdf' target='_blank'>Map (Overlay; 8.5x11; PDF; City)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Riverside (City)  -->
// <marker lat="48.502477" lng="-119.506011" label="Riverside" agency="City" html="<a href='0-ordinances/Riverside%20(City).pdf' target='_blank'>Ordinance (PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--  Riverdale Raceway (Private)  -->
// <marker lat="46.357166" lng="-122.697850" label="Riverdale Raceway" agency="Private" html="<a href='http://www.riverdaleraceway.com/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Riverside State Park 7 Mile ORV Area (WSPR)  -->
// <marker lat="47.739600" lng="-117.548000" maxZoom="12" label="Riverside State Park - 7 Mile ORV Area" agency="WSPR" html="Acres: 600 acres <br> <a href='WSPR-RSP%207%20Mile%20ORV%20Area.htm' target='_blank'>Web page (WOHVA)</a> <br> <a href='0-brochures/WSPR-RSP-ORV%20Area.pdf' target='_blank'>Brochure (PDF; WSPR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Park open 6:30 AM to dusk, 7 days a week <br> &nbsp;&nbsp;&nbsp;May be limited during dry season!</font></b>">
// <!--  Main Entrance Road  -->
// <marker lat="47.750425" lng="-117.545100" minZoom="13" label="Main Entrance Road" html="Acres: 600 acres <br> <a href='WSPR-RSP%207%20Mile%20ORV%20Area.htm' target='_blank'>Web page (WOHVA)</a> <br> <a href='0-brochures/WSPR-RSP-ORV%20Area.pdf' target='_blank'>Brochure (PDF; WSPR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Park open 6:30 AM to dusk, 7 days a week <br> &nbsp;&nbsp;&nbsp;May be limited during dry season!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Parking lot  -->
// <marker lat="47.739850" lng="-117.543556" minZoom="13" label="Parking lot" html="Acres: 600 acres <br> <a href='WSPR-RSP%207%20Mile%20ORV%20Area.htm' target='_blank'>Web page (WOHVA)</a> <br> <a href='0-brochures/WSPR-RSP-ORV%20Area.pdf' target='_blank'>Brochure (PDF; WSPR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Park open 6:30 AM to dusk, 7 days a week <br> &nbsp;&nbsp;&nbsp;May be limited during dry season!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Mud bog  -->
// <marker lat="47.737550" lng="-117.554716" minZoom="13" label="Mud bog" html="Acres: 600 acres <br> <a href='WSPR-RSP%207%20Mile%20ORV%20Area.htm' target='_blank'>Web page (WOHVA)</a> <br> <a href='0-brochures/WSPR-RSP-ORV%20Area.pdf' target='_blank'>Brochure (PDF; WSPR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Park open 6:30 AM to dusk, 7 days a week <br> &nbsp;&nbsp;&nbsp;May be limited during dry season!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Rock Garden  -->
// <marker lat="47.733222" lng="-117.551625" minZoom="13" label="Rock Garden" html="Acres: 600 acres <br> <a href='WSPR-RSP%207%20Mile%20ORV%20Area.htm' target='_blank'>Web page (WOHVA)</a> <br> <a href='0-brochures/WSPR-RSP-ORV%20Area.pdf' target='_blank'>Brochure (PDF; WSPR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Park open 6:30 AM to dusk, 7 days a week <br> &nbsp;&nbsp;&nbsp;May be limited during dry season!</font></b>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  New youth facility  -->
// </marker>
// <!--  Saddle Mountains (BLM)  -->
// <marker lat="46.774108" lng="-119.884597" label="Saddle Mountains" agency="BLM" html="Acres: 4,300 acres <br> Websites: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.recreation.gov/recAreaDetails.do?contractCode=NRSO&recAreaId=1793&agencyCode=126' target='_blank'>recreation.gov</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://publiclands.org/explore/site.php?id=4583' target='_blank'>Public Lands Information Center</a> <br> <a href='http://publiclands.org/graphics/maps/wa/wa_q10.jpg' target='_blank'>Vicinity Map (6x6.75; JPG; PLIC)</a> <br> Site maps: <br> &nbsp;&nbsp;&nbsp; <a href='0-maps/BLM-Saddle%20Mountains.jpg' target='_blank'>Saddle Mountains (45x35; JPG; BLM)</a> <br> &nbsp;&nbsp;&nbsp; <a href='0-maps/BLM-West%20Saddle%20Mountains.jpg' target='_blank'>West Saddle Mountains (OHV open area) &nbsp; (35x46; JPG; BLM)</a> <br> <a href='http://www.gpo.gov/fdsys/pkg/FR-2005-08-18/pdf/05-16162.pdf' target='_blank'>Supplemental Rules for Oregon and Washington (PDF; BLM)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  South Bend (City)  -->
// <marker lat="46.663255" lng="-123.800263" label="South Bend" agency="City" html="<a href='http://www.southbend-wa.gov/en/' target='_blank'>Website (City)</a>">
// <category>ATV</category>
// </marker>
// <!--  Spokane County ORV Park (County)  -->
// <marker lat="47.657258" lng="-117.582566" label="Spokane County ORV Park" agency="County" html="<a href='http://www.cawh.org/spokane_county_orv_park.asp' target='_blank'>Web page (Spokane County)</a> <br> <b><font color='red'>NOTE: This is a fee area! Open only for scheduled events.</font></b> <br> For more information about scheduled events, click on any of the following: <br> &nbsp;&nbsp; <a href='http://www.extmotorsports.com/' target='_blank'>http://www.extmotorsports.com/</a> <br> &nbsp;&nbsp; <a href='http://www.spokanekarting.org/' target='_blank'>http://www.spokanekarting.org/</a> <br> &nbsp;&nbsp; <a href='http://www.sunsetspeedway.org/' target='_blank'>http://www.sunsetspeedway.org/</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Starvation Ridge: See Eddieville Sports Park  -->
// <!--  Stevens (County)  -->
// <marker lat="48.499438" lng="-117.962322" label="Stevens" agency="County" html="<a href='http://www.co.stevens.wa.us/commissioners/BOCC_OHV_UseArea.htm' target='_blank'>Web page</a> <br> <a href='http://www.co.stevens.wa.us/commissioners/Commissioners%20Documents/Ordinances/2012/Ordinance%202012-04%20repealing%20Ordinance%2005-2010%20and%20designating%20roads%20for%20off%20highway%20vehicle%20use.pdf' target='_blank'>Ordinance (PDF)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.co.stevens.wa.us/commissioners/OHV_Maps/OHVMap8x11.pdf' target='_blank'>(8.5x11; PDF; County)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.co.stevens.wa.us/commissioners/OHV_Maps/OHV2012.pdf' target='_blank'>(36x48; PDF; County)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Straddleline ORV Park (Mudslingers MX)  (Private)  -->
// <marker lat="47.057755" lng="-123.195525" label="Straddleline ORV Park" agency="Private" note="Mudslingers MX" html="<a href='http://straddlelineorv.com/' target='_blank'>Website</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://mudslingersmx.com/' target='_blank'>Mudslingers MX Website</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Sultan (City)  -->
// <marker lat="47.861738" lng="-121.815255" label="Sultan" agency="City" html="<a href='0-ordinances/Sultan%20(City).pdf' target='_blank'>Ordinance (PDF)</a>">
// <category>ATV</category>
// </marker>
// <!--  Tahuya State Forest (DNR)  -->
// <marker lat="47.470927" lng="-122.912747" maxZoom="11" label="Tahuya State Forest" agency="DNR" html="<a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_tahuya_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_both.pdf' target='_blank'>Complete (16.25x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_e.pdf' target='_blank'>East half (8.25x10.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_w.pdf' target='_blank'>West half (8.25x10.5; PDF; DNR)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// <!--  North Entrance  -->
// <marker lat="47.514477" lng="-122.882308" minZoom="12" label="North Entrance" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_both.pdf' target='_blank'>Complete (16.25x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_e.pdf' target='_blank'>East half (8.25x10.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_w.pdf' target='_blank'>West half (8.25x10.5; PDF; DNR)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  South Entrance  -->
// <marker lat="47.438625" lng="-122.900280" minZoom="12" label="South Entrance" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_both.pdf' target='_blank'>Complete (16.25x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_e.pdf' target='_blank'>East half (8.25x10.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_tahuya_07_w.pdf' target='_blank'>West half (8.25x10.5; PDF; DNR)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// </marker>
// <!--  Tarbell, Bells Mountain, Silver Star (DNR)  -->
// <marker lat="45.813794" lng="-122.244222" label="Tarbell, Bells Mountain, Silver Star" agency="DNR" html="Total trails length: 35.0 miles <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_tarbell_06_full.pdf' target='_blank'>Complete (11x17; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_tarbell_06_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_tarbell_06_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a>">
// <category>MC</category>
// </marker>
// <!--  Toes Motocross Park (Private)  -->
// <marker lat="46.914033" lng="-119.824152" label="Toes Motocross Park" agency="Private" html="<a href='http://www.toesmxp.com/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Tonasket (Town)  -->
// <marker lat="48.704555" lng="-119.439788" label="Tonasket" agency="Town" html="<a href='http://www.ncatvclub.org/pdf/ATV%20Ordinance.pdf' target='_blank'>Ordinance (PDF)</a> <br> &nbsp;&nbsp;&nbsp; Link courtesy of the <a href='http://www.ncatvclub.org/' target='_blank'>North Central ATV Club Washington</a>">
// <category>ATV</category>
// </marker>
// <!--  Umatilla National Forest (USFS)  -->
// <marker lat="45.642575" lng="-118.685725" maxZoom="8" label="Umatilla National Forest" agency="USFS" note="(Headquarters)" html="<a href='http://www.fs.usda.gov/main/umatilla/home' target='_blank'>Website (USFS)</a> <br> <a href='http://www.fs.usda.gov/detail/umatilla/home/?cid=stelprdb5414334' target='_blank'>Motor Vehicle Use Maps (MVUMs) &nbsp;&nbsp; (web page)</a> <br> <a href='http://www.fs.usda.gov/activity/umatilla/recreation/ohv/?recid=56399&actid=93' target='_blank'>OHV Trail Riding (list of trails)</a>">
// <!--  Pomeroy Ranger District  -->
// <marker lat="46.481430" lng="-117.720908" minZoom="9" label="Pomeroy Ranger District" note="(office)" html="<a href='http://www.fs.usda.gov/recarea/umatilla/recreation/ohv/recarea/?recid=56673&actid=94' target='_blank'>Pomeroy Ranger District (web page)</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Walla Walla Ranger District  -->
// <marker lat="46.059361" lng="-118.363658" minZoom="9" label="Walla Walla Ranger District" note="(office)" html="<a href='http://www.fs.usda.gov/recarea/umatilla/recreation/ohv/recarea/?recid=56673&actid=94' target='_blank'>Walla Walla Ranger District (web page)</a>">
// <category>MC</category>
// </marker>
// </marker>
// <!--  Walker Valley ORV Trail System (DNR)  -->
// <marker lat="48.375911" lng="-122.169977" label="Walker Valley ORV Trail System" agency="DNR" html="Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_walker_12_full.pdf' target='_blank'>Complete (16.75x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_walker_12_e.pdf' target='_blank'>East half (8.5x10.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_walker_12_w.pdf' target='_blank'>West half (8.5x10.5; PDF; DNR)</a>">
// <category>4x4</category>
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Ward Creek Motocross (Private)  -->
// <marker lat="46.682023" lng="-123.663116" label="Ward Creek Motocross" agency="Private" html="<a href='http://wardcreekmx.com/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Washougal MX Park (Private)  -->
// <marker lat="45.628213" lng="-122.260005" label="Washougal MX Park" agency="Private" html="<a href='http://www.washougalmxpk.com/2014_WAMX/' target='_blank'>Website</a>">
// <category>MC</category>
// </marker>
// <!--  Whistle Lake (Anacortes Community Forest Lands)  -->
// <marker lat="48.473991" lng="-122.605175" label="Whistle Lake" agency="Anacortes Community Forest Lands" html="Total trails length: 15 ~ 20 miles <br> <a href='http://www.cityofanacortes.org/community_forest_lands_%28acfl%29.php#.U7sitShnC2U' target='_blank'>Whistle Lake (web page)</a>">
// <category>MC</category>
// </marker>
// <!--  Woodland M/X Park (Private)  -->
// <marker lat="45.940136" lng="-122.662506" label="Woodland M/X Park" agency="Private" html="<a href='http://www.woodlandmx.com/' target='_blank'>Website</a>">
// <category>ATV</category>
// <category>MC</category>
// </marker>
// <!--  Yacolt Burn State Forest (DNR)  -->
// <marker lat="45.666654" lng="-122.311094" maxZoom="10" label="Yacolt Burn State Forest" agency="DNR" sublabel="Jones Creek ORV Trailhead" html="Total trails length: 14.0 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_yacolt_burn_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_full.pdf' target='_blank'>Complete (17x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a>">
// <!--  Jones Creek ORV Trailhead (DNR)  -->
// <marker lat="45.666654" lng="-122.311094" minZoom="11" label="Jones Creek ORV Trailhead" html="Total trails length: 14.0 miles <br> <a href='http://www.dnr.wa.gov/AboutDNR/ManagedLands/Pages/amp_rec_yacolt_burn_state_forest.aspx' target='_blank'>Website (DNR)</a> <br> Maps: <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_full.pdf' target='_blank'>Complete (17x11.5; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_e.pdf' target='_blank'>East half (8.5x11; PDF; DNR)</a> <br> &nbsp;&nbsp;&nbsp; <a href='http://www.dnr.wa.gov/Publications/eng_rms_jones_06_w.pdf' target='_blank'>West half (8.5x11; PDF; DNR)</a> <br> <b><font color='red'>RESTRICTIONS: <br> &nbsp;&nbsp;&nbsp;Motorized trails open May 1st thru November 30th</font></b>">
// <category>ATV</category>
// </marker>
// </marker>
// </markers>`;
//
//
// var processXML = function(xml) {
//   var matches = xml.match(/lat.*html/g);
//   matches = matches.map((elem) => {
//     return elem.substr(0,elem.length - 5);
//   });
//   return matches;
// }
//
// var temp = processXML(xmlString);
//
// // console.log(temp[0]);
// // console.log(temp[0].split('" '));
// var ridingAreas = [];
// for (var i = 0; i < temp.length; i++) {
//   var area = temp[i];
//   // console.log(area)
//   var lat = area.substr(5,9);
//   var lon = area.substr(21,11);
//   var label = area.substring(area.indexOf('label="')+7,area.indexOf('"',area.indexOf('label="')+7));
//   var agency = "";
//   if (area.indexOf('agency="') !== -1) {
//     agency = area.substring(area.indexOf('agency="')+8,area.indexOf('"',area.indexOf('agency="')+8));
//   }
//   var sublabel = "";
//   if (area.indexOf('sublabel="') !== -1) {
//     sublabel = area.substring(area.indexOf('sublabel="')+10,area.indexOf('"',area.indexOf('sublabel="')+10));
//   }
//   var html = "";
//   if (area.indexOf('html="') !== -1) {
//     html = area.substring(area.indexOf('html="')+6,area.indexOf('"',area.indexOf('html="')+6));
//   }
//
//   console.log(area);
//   // var label = area.match(/\blabel=".*"/);
//   // console.log(lat);
//   // console.log(lon);
//   // console.log(label);
//   // console.log(agency);
//   // console.log(html);
//   // console.log("lat: " + lat + " lng: " + lon + " label: " + label + " agency: " + agency + " sublabel: " + sublabel);
//   var obj = {};
//   obj.lat = lat;
//   obj.lon = lon;
//   obj.label = label;
//   obj.agency = agency;
//   obj.sublabel = sublabel;
//   obj.html = html;
//   ridingAreas.push(obj);
// }
//
// // console.log(ridingAreas);
