'use client';

import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeGL = ()=>{
    const globeRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const globeElement = globeRef.current;
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!globeElement || motionPreference.matches) return;

        let world: InstanceType<typeof Globe>;
        try {
            world = new Globe(globeElement);
        } catch {
            // Globe decoration is optional on devices without WebGL.
            globeElement.replaceChildren();
            return;
        }

        const N = 21;
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

        world
            .width(300)
            .height(300)
            .backgroundColor('#ffffff00')
            .pointOfView({ lat: 0.64, lng: 115.28, altitude: 1.7 })
            .showAtmosphere(true)
            .atmosphereColor('rgba(255,255,255,0.25)')
            .atmosphereAltitude(0.17)
            .globeImageUrl('https://unpkg.com/three-globe@2.45.2/example/img/earth-blue-marble.jpg')
            .arcsData(arcsData)
            .arcAltitude(0.3)
            .arcColor('color')
            .arcDashLength(() => Math.random())
            .arcDashGap(() => Math.random())
            .arcDashAnimateTime(() => Math.random() * 4000 + 500);
        world.controls().enableZoom = false
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.8;
        function updateMotion() {
            if (motionPreference.matches) world.pauseAnimation();
            else world.resumeAnimation();
        }

        motionPreference.addEventListener('change', updateMotion);
        return () => {
            motionPreference.removeEventListener('change', updateMotion);
            world._destructor();
            globeElement.replaceChildren();
        };
    }, []);

    return(
        <div aria-hidden="true" className="absolute flex items-center justify-center left-0 top-36 md:top-40 w-full h-full motion-reduce:hidden">
            <div ref={globeRef} className="absolute z-10"></div>
        </div>
    );
};
export default GlobeGL;
