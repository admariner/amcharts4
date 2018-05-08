/**
 * Module, defining Axis Renderer for vertical axes.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { AxisRenderer, IAxisRendererProperties, IAxisRendererAdapters, IAxisRendererEvents } from "./AxisRenderer";
import { SpriteEventDispatcher, AMEvent } from "../../core/Sprite";
import { IPoint } from "../../core/defs/IPoint";
import { Axis } from "./Axis";
import { Grid } from "./Grid";
import { AxisTick } from "./AxisTick";
import { AxisLabel } from "./AxisLabel";
import { AxisBreak } from "./AxisBreak";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[AxisRendererX]].
 */
export interface IAxisRendererXProperties extends IAxisRendererProperties {
}
/**
 * Defines events for [[AxisRendererX]].
 */
export interface IAxisRendererXEvents extends IAxisRendererEvents {
}
/**
 * Defines adapters for [[AxisRendererX]].
 *
 * @see {@link Adapter}
 */
export interface IAxisRendererXAdapters extends IAxisRendererAdapters, IAxisRendererXProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A renderer for horizontal axis.
 *
 * @see {@link IAxisRendererEvents} for a list of available events
 * @see {@link IAxisRendererAdapters} for a list of available Adapters
 */
export declare class AxisRendererX extends AxisRenderer {
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {IAxisRendererXProperties}
     */
    _properties: IAxisRendererXProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {IAxisRendererXAdapters}
     */
    _adapter: IAxisRendererXAdapters;
    /**
     * Event dispatcher.
     *
     * @type {SpriteEventDispatcher<AMEvent<AxisRendererX, IAxisRendererXEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<AxisRendererX, IAxisRendererXEvents>>;
    /**
     * Constructor.
     *
     * @param {Axis} axis Related axis
     */
    constructor();
    /**
    * @ignore
    */
    setAxis(axis: Axis): void;
    /**
     * Called when rendered is attached to an Axis, as well as a property of
     * Axis that might affect the appearance is updated.
     *
     * E.g. `axis.opposite`, `axis.inside`, etc.
     *
     * This method is called **before** draw, so that any related setting
     * changed in this method can be changed.
     *
     * @todo Description (review)
     * @ignore Exclude from docs
     */
    processRenderer(): void;
    /**
     * Updates some of the Axis tooltip's visual properties, related to
     * rendering of the Axis.
     *
     * @todo Description (review)
     * @ignore Exclude from docs
     */
    updateTooltip(): void;
    /**
     * Updates and positions a label element.
     *
     * @ignore Exclude from docs
     * @param {AxisLabel}  label        Label element
     * @param {number}     position     Starting position
     * @param {number}     endPosition  Ending position
     */
    updateLabelElement(label: AxisLabel, position: number, endPosition: number): void;
    /**
     * Returns actual length of the Axis, in pixels.
     *
     * @return {number} Length (px)
     */
    readonly axisLength: number;
    /**
     * Converts relative position on axis to point coordinates.
     *
     * @param  {number}  position  Position (0-1)
     * @return {IPoint}            Point
     */
    positionToPoint(position: number): IPoint;
    /**
     * Converts a point at specific coordinates to a relative position (0-1)
     * on the axis.
     *
     * @param  {IPoint}  point  Point
     * @return {number}         Position (0-1)
     */
    pointToPosition(point: IPoint): number;
    /**
     * [getPositionRangePath description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @param  {number}  startPosition  Starting position
     * @param  {number}  endPosition    End position
     * @return {string}                 SVG path
     */
    getPositionRangePath(startPosition: number, endPosition: number): string;
    /**
     * Updates and positions an axis break element.
     *
     * @ignore Exclude from docs
     * @param {AxisBreak} axisBreak Break element
     */
    updateBreakElement(axisBreak: AxisBreak): void;
    /**
     * Updates and positions a grid element.
     *
     * @ignore Exclude from docs
     * @param {Grid}    grid         Grid element
     * @param {number}  position     Starting position
     * @param {number}  endPosition  End position
     */
    updateGridElement(grid: Grid, position: number, endPosition: number): void;
    /**
     * Updates and positions a tick element.
     *
     * @ignore Exclude from docs
     * @param {AxisTick}  tick         Tick element
     * @param {number}    position     Starting position
     * @param {number}    endPosition  End position
     */
    updateTickElement(tick: AxisTick, position: number, endPosition: number): void;
    /**
     * Updates and positions the axis line element.
     *
     * @ignore Exclude from docs
     */
    updateAxisLine(): void;
    /**
     * Updates and positions the base grid element.
     *
     * @ignore Exclude from docs
     */
    updateBaseGridElement(): void;
    /**
     * Creates visual elements for and axis break.
     *
     * @ignore Exclude from docs
     * @param {AxisBreak} axisBreak Axis break
     */
    createBreakSprites(axisBreak: AxisBreak): void;
}