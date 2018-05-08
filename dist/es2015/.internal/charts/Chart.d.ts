/**
 * [[Chart]] class provides base functionality for all chart types to inherit.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Component, IComponentProperties, IComponentDataFields, IComponentEvents, IComponentAdapters } from "../core/Component";
import { SpriteEventDispatcher, AMEvent } from "../core/Sprite";
import { ListTemplate, IListEvents } from "../core/utils/List";
import { Container } from "../core/Container";
import { Label } from "../core/elements/Label";
import { Legend } from "../charts/Legend";
import { DataItem } from "../core/DataItem";
/**
 * ============================================================================
 * DATA ITEM
 * ============================================================================
 * @hidden
 */
/**
 * Defines a [[DataItem]] for [[Chart]].
 *
 * @see {@link DataItem}
 */
export declare class ChartDataItem extends DataItem {
    /**
     * Defines a type of [[Component]] this data item is used for.
     *
     * @type {Chart}
     */
    _component: Chart;
    /**
     * Constructor
     */
    constructor();
}
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines data fields for [[Chart]].
 */
export interface IChartDataFields extends IComponentDataFields {
}
/**
 * Defines properties for [[Chart]].
 */
export interface IChartProperties extends IComponentProperties {
}
/**
 * Defines events for [[Chart]].
 */
export interface IChartEvents extends IComponentEvents {
}
/**
 * Defines adapters for [[Chart]].
 *
 * @see {@link Adapter}
 */
export interface IChartAdapters extends IComponentAdapters, IChartProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A base class for all Charts.
 *
 * @see {@link IChartEvents} for a list of available Events
 * @see {@link IChartAdapters} for a list of available Adapters
 */
export declare class Chart extends Component {
    /**
     * Available data fields.
     *
     * @ignore Exclude from docs
     * @type {IChartDataFields}
     */
    _dataFields: IChartDataFields;
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {IChartProperties}
     */
    _properties: IChartProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {IChartAdapters}
     */
    _adapter: IChartAdapters;
    /**
     * Event dispatcher.
     *
     * @type {SpriteEventDispatcher<AMEvent<Chart, IChartEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<Chart, IChartEvents>>;
    /**
     * A List of chart titles.
     *
     * @type {List<Label>}
     */
    titles: ListTemplate<Label>;
    /**
     * Container that holds the chart itself.
     *
     * @type {Container}
     */
    chartContainer: Container;
    /**
     * A reference to a container that holds both the chart and the legend.
     *
     * @type {Container}
     */
    chartAndLegendContainer: Container;
    /**
     * A reference to chart's [[Legend]].
     * @ignore
     * @type {Legend}
     */
    protected _legend: Legend;
    /**
     * Constructor
     */
    constructor();
    /**
     * Sets defaults that instantiate some objects that rely on parent, so they
     * cannot be set in constructor.
     */
    protected applyInternalDefaults(): void;
    /**
     * Initiates drawing of the chart.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * Updates legend's hierarchy based on the position.
     */
    protected fixLayout(): void;
    /**
     * Setups the legend to use the chart's data.
     */
    protected feedLegend(): void;
    /**
     * Adds a new title to the chart when it is inserted into chart's titles
     * list.
     * @param  {IListEvents<Label>["insert"]}  event  An event object which is triggered when inserting into titles list
     * @return {Label}                               Label object
     */
    protected processTitle(event: IListEvents<Label>["insert"]): Label;
    /**
     * Checks if chart has any title elements. If it does, we will use them in an
     * `aria-labelledby` attribute so that screen readers can use them to properly
     * describe the chart when it is focused or hovered.
     *
     * @ignore Exclude from docs
     */
    updateReaderTitleReferences(): void;
    /**
     * @return {Legend} legend
     */
    /**
     * Chart legend
     *
     * @todo Description
     *
     * @param {Legend} legend
     */
    legend: Legend;
    protected setLegend(legend: Legend): void;
    /**
     * Processes JSON-based config before it is applied to the object.
     *
     * @ignore Exclude from docs
     * @param {object}  config  Config
     */
    processConfig(config?: {
        [index: string]: any;
    }): void;
}