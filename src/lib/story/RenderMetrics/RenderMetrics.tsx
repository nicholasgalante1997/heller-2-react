import React, {
  Profiler,
  type ProfilerOnRenderCallback,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ElementRef
} from 'react';
import './RenderMetrics.css';

interface RenderMetricsProps {
  children: React.ReactNode | React.ReactNode[];
  id: string;
}

const classNames = {
  Container: 'heller-2__render-metrics-container',
  ComponentContainer: 'heller-2__render-metrics-component-container',
  MetricsContainer: 'heller-2__render-metrics-metrics-container'
} as const;

export function RenderMetricsComponent({ children, id }: RenderMetricsProps) {
  const [mounted, setMounted] = useState(false);
  const metricsContainerRef = useRef<ElementRef<'div'>>(null);
  const onRender: ProfilerOnRenderCallback = useCallback(
    (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
      if (!mounted && metricsContainerRef.current) {
        const metricsString = `
            <p>Component ID: <b>${id}</b></p>
            <p>Render Duration: <b>${actualDuration}</b></p>
            <p>Base Render Duration: <b>${baseDuration}</b></p>
        `;
        metricsContainerRef.current.innerHTML = metricsString;
        setMounted(true);
      }
    },
    [mounted]
  );
  return (
    <div className={classNames.Container}>
      <div className={classNames.ComponentContainer}>
        <Profiler onRender={onRender} id={id}>
          {children}
        </Profiler>
      </div>
      <div className={classNames.MetricsContainer} ref={metricsContainerRef} />
    </div>
  );
}
