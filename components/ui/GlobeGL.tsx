'use client';

import { useEffect } from 'react';
import Globe from 'globe.gl';

const GlobeGL = ()=>{
    useEffect(()=>{
        const N = 30;
        const arcsData = [...Array(N).keys()].map(() => ({
            startLat: (Math.random() - 0.5) * 180,
            startLng: (Math.random() - 0.5) * 360,
            endLat: (Math.random() - 0.5) * 180,
            endLng: (Math.random() - 0.5) * 360,
            color: [
                ['red', 'blue', 'green', 'white'][Math.round(Math.random() * 3)],
                ['red', 'blue', 'green', 'white'][Math.round(Math.random() * 3)],
            ],
        }));

        const globeElement = document.getElementById('globeViz');

        if (globeElement) {
            const world = new Globe(globeElement)
                .width(300)
                .height(300)
                .backgroundColor('#ffffff00')
                .pointOfView({ lat: 0.64, lng: 115.28, altitude: 1.7 }) 
                .showAtmosphere(true)
                .atmosphereColor('lightskyblue')
                .atmosphereAltitude(0.17)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .arcsData(arcsData)
                .arcColor('color')
                .arcDashLength(() => Math.random())
                .arcDashGap(() => Math.random())
                .arcDashAnimateTime(() => Math.random() * 4000 + 500);
            world.controls().enableZoom = false
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.7;
        }
    }, []);

    return(
        <div className="absolute flex items-center justify-center left-0 top-36 md:top-40 w-full h-full">
            <div id="globeViz" className="absolute z-10"></div>
        </div>
    );
};

export default GlobeGL;
