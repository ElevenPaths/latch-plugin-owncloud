/*
  Latch ownCloud 7 plugin - Integrates Latch into the ownCloud 7 authentication process.
  Copyright (C) 2014 Eleven Paths.

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

function showuninstallwarning(){
	$.colorbox({
		opacity:0.4, 
		transition:"elastic", 
		speed:100, 
		width:"70%", 
		height:"70%", 
		href: OC.filePath('latch_plugin', '', 'uninstallRenderer.php'),
		onComplete : function(){
			if (!SVGSupport()) {
				replaceSVG();
			}
		}
	});
}

$(window).load(function(){
    $("#show_popup").on("click",function(){
       showuninstallwarning();
    });
    
    $('#closeWarning').live('click', function () {	
        $.colorbox.close();
    });
    
    $('#cancel_uninstall').live('click', function () {	
        $.colorbox.close();
    });
});