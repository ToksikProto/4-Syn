Content.makeFrontInterface(600, 600);

const var VolumeMeter = Content.getComponent("VolumeMeter");

const var t = Engine.createTimerObject();

t.setTimerCallback(function()
{	
	VolumeMeter.setSliderAtIndex(0, Engine.getMasterPeakLevel(0));
	VolumeMeter.setSliderAtIndex(1, Engine.getMasterPeakLevel(1));
	
	if (Engine.getMasterPeakLevel(true) > .5)
	{
		VolumeMeter.setColour(1, Colours.darkred);
	}	
	else
	{
		VolumeMeter.setColour(1, Colours.lime);	
	}
});

t.startTimer(50);

const var dualOsc1 = getfunction onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 