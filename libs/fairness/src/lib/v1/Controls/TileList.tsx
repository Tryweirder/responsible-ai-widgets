// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Icon, Text, IProcessedStyleSet } from "office-ui-fabric-react";
import React from "react";

import { TileListStyles, ITilesListStyles } from "./TileList.styles";

export interface ITileProp {
  title: string;
  selected: boolean;
  description?: string;
  tags?: string[];
  disabled?: boolean;
  onSelect: () => void;
}

export interface ITileListProps {
  items: ITileProp[];
  columnCount?: number;
}
export class TileList extends React.PureComponent<ITileListProps> {
  public render(): React.ReactNode {
    const styles = TileListStyles();
    return (
      <div className={styles.container}>
        {this.props.items.map((item, index) =>
          this._onRenderCell(item, index, styles)
        )}
      </div>
    );
  }

  private _onRenderCell = (
    item: ITileProp,
    index: number | undefined,
    styles: IProcessedStyleSet<ITilesListStyles>
  ): JSX.Element => {
    return (
      <div
        className={styles.itemCell}
        onClick={item.onSelect}
        key={index}
        data-is-focusable={true}
        role="radio"
        aria-checked={item.selected}
        tabIndex={index}
        onKeyUp={undefined}
      >
        <Icon
          iconName={item.selected ? "RadioBtnOn" : "RadioBtnOff"}
          className={styles.iconClass}
        />
        <Text className={styles.title} block>
          {item.title}
        </Text>
        <Text className={styles.description}>{item.description}</Text>
      </div>
    );
  };
}
