import * as React from 'react';
import { Track, TrackProcessor } from 'livekit-client';
import { TrackProcessorSelect } from '../controls/TrackProcessorSelect';
import { mergeProps } from '../../mergeProps';

/**
 * @alpha
 */
export type SettingsMenuOptions = {
  media?: {
    label: string;
    camera: {
      label: string;
      processors: { label: string; processors: Record<string, TrackProcessor<Track.Kind>> };
    };
  };
};

/**
 * @alpha
 */
export interface SettingsMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  settings: SettingsMenuOptions;
}

/**
 *
 * @alpha
 */
export function SettingsMenu({ settings, ...props }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const mergedProps = mergeProps(props, {
    onClick: () => setIsOpen((state) => !state),
    className: 'lk-button',
  });

  const tabs = React.useMemo(
    () => Object.keys(settings) as Array<keyof SettingsMenuOptions>,
    [settings],
  );

  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <>
      <button {...mergedProps}>{props.children ?? 'Effects'}</button>
      {isOpen && (
        <div className="lk-modal">
          <div className="lk-settings" style={{ width: '100%' }}>
            <div className="lk-tabs">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  data-lk-active={tab === activeTab}
                >
                  {settings[tab]?.label}
                </span>
              ))}
            </div>
            {activeTab === 'media' && settings.media?.camera && (
              <>
                <h3>{settings.media.camera.label}</h3>
                <section>
                  <h4>{settings.media.camera.processors.label}</h4>
                  <TrackProcessorSelect
                    processorMap={settings.media.camera.processors.processors}
                    source={Track.Source.Camera}
                  />
                </section>
              </>
            )}
          </div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      )}
    </>
  );
}
