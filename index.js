/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/geometry-calculator-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/geometry-calculator-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/geometry-calculator-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/geometry-calculator-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href=
 * "https://david-dm.org/Xotic750/geometry-calculator-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/geometry-calculator-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/geometry-calculator-x" title="npm version">
 * <img src="https://badge.fury.io/js/geometry-calculator-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * A Javascript library that performs the C.A.G Geometry Calculator
 * requirements.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6-shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * `es7-shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 7.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @see https://gist.github.com/KristofferV/952493dfa53b1349e684c4fa2f203403
 * @module geometry-calculator-x
 */
/*jslint maxlen:80, this:true, white:true */
/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, plusplus:true, maxparams:4, maxdepth:2,
  maxstatements:10, maxcomplexity:2 */
/*global module */
(function () {
  'use strict';

  /**
   * A right triangle (American English) or
   * right-angled triangle (British English) is a triangle in which one angle
   * is a right angle (that is, a 90-degree angle). The relation between the
   * sides and angles of a right triangle is the basis for trigonometry.
   *
   * @example
   * var triangle = new RightAngledTriangle(3, 4, 5);
   * console.log(triangle.circumference()); // 12
   * console.log(triangle.area()); // 6
   *
   * @class RightAngledTriangle
   * @this {RightAngledTriangle}
   * @public
   * @param {number} x The base unit distance measurement.
   * @param {number} y The height unit distance measurement.
   * @param {number} h The hypotenuse unit distance measurement.
   */
  function RightAngledTriangle(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }

  /**
   * The circumference of a right angled triangle is the sum of the three
   * side lengths.
   * <pre>Circumference = x + y + h</pre>
   *
   * @public
   * @function circumference
   * @memberof module:geometry-calculator-x~RightAngledTriangle#
   * @this {RightAngledTriangle}
   * @return {number} The circumference unit distance measurement.
   */
  RightAngledTriangle.prototype.circumference = function () {
    return this.x + this.y + this.h;
  };

  /**
   * The area is given by the area formula for an arbitrary triangle.
   * <pre>Area = (1 / 2) * B * h</pre>
   * If the triangle is right angled, as in this case, the side y is the
   * same as the height an y is the same as the base line.
   * <pre>Area = (1 / 2) * y * x</pre>
   *
   * @public
   * @function area
   * @memberof module:geometry-calculator-x~RightAngledTriangle#
   * @this {RightAngledTriangle}
   * @return {number} The area unit square measurement.
   */
  RightAngledTriangle.prototype.area = function () {
    return 0.5 * this.x * this.y;
  };

  /**
   * In Euclidean plane geometry, a rectangle is a quadrilateral with four
   * right angles. It can also be defined as an equiangular quadrilateral,
   * since equiangular means that all of its angles are equal. It can also be
   * defined as a parallelogram containing a right angle. A rectangle with
   * four sides of equal length is a square. The term oblong is occasionally
   * used to refer to a non-square rectangle.
   *
   * @example
   * var rectangle = new Rectangle(3, 4, 5);
   * console.log(rectangle.circumference()); // 14
   * console.log(rectangle.area()); // 12
   *
   * @class Rectangle
   * @this {Rectangle}
   * @public
   * @param {number} x The base unit distance measurement.
   * @param {number} y The height unit distance measurement.
   */
  function Rectangle(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * The circumference of a rectangle is the sum of the two side
   * lengths then doubled.
   * <pre>Circumference = (x + y) * 2</pre>
   *
   * @public
   * @function circumference
   * @memberof module:geometry-calculator-x~Rectangle#
   * @this {Rectangle}
   * @return {number} The circumference unit distance measurement.
   */
  Rectangle.prototype.circumference = function () {
    return (this.x + this.y) * 2;
  };

  /**
   * To find the area of a rectangle, multiply the length by the width.
   * <pre>Area = x * y</pre>
   *
   * @public
   * @function area
   * @memberof module:geometry-calculator-x~Rectangle#
   * @this {Rectangle}
   * @return {number} The area unit square measurement.
   */
  Rectangle.prototype.area = function () {
    return this.x * this.y;
  };

  /**
   * A circle is a simple closed shape in Euclidean geometry. It is the set of
   * all points in a plane that are at a given distance from a given point,
   * the centre; equivalently it is the curve traced out by a point that moves
   * so that its distance from a given point is constant. The distance between
   * any of the points and the centre is called the radius.
   *
   * @example
   * var circle = new Circle(3);
   * console.log(circle.circumference()); // 18.84
   * console.log(circle.area()); // 28.27
   *
   * @class Circle
   * @this {Circle}
   * @public
   * @param {number} r The radius unit distance measurement.
   */
  function Circle(r) {
    this.r = r;
  }

  /**
   * The circumference of a circle relates to one of the most important
   * mathematical constants in all of mathematics.
   * <pre>Circumference = 2 * PI * r</pre>
   *
   * @public
   * @function circumference
   * @memberof module:geometry-calculator-x~Circle#
   * @this {Circle}
   * @return {number} The circumference unit distance measurement.
   */
  Circle.prototype.circumference = function () {
    return 2 * Math.PI * this.r;
  };

  /**
   * To find the area of a circle.
   * <pre>Area = PI * (r^2)</pre>
   *
   * @public
   * @function area
   * @memberof module:geometry-calculator-x~Circle#
   * @this {Circle}
   * @return {number} The area unit square measurement.
   */
  Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.r, 2);
  };

  /**
   * Total area of multiple shapes (not only triangles and rectangles but also
   * other types of shapes that impliment #area).
   *
   * @example
   * var shapesArea = new ShapesArea(triangle, rectangle, circle);
   * console.log(shapesArea.area()); // 46.27
   *
   * @class ShapesArea
   * @this {ShapesArea}
   * @public
   * @param {...Object} varArgs The shapes to calculate the total area of.
   */
  function ShapesArea() {
    this.shapes = Array.from(arguments);
  }

  /**
   * To find the area of all the shapes supplied to the constructor.
   *
   * @public
   * @function area
   * @memberof module:geometry-calculator-x~ShapesArea#
   * @this {ShapesArea}
   * @return {number} The area unit square measurement.
   */
  ShapesArea.prototype.area = function () {
    return this.shapes.reduce(function (total, shape) {
      return total + shape.area();
    }, 0);
  };

  module.exports = {
    RightAngledTriangle: RightAngledTriangle,
    Rectangle: Rectangle,
    Circle: Circle,
    ShapesArea: ShapesArea
  };
}());
