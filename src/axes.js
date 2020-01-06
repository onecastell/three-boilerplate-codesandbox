import { BufferAttribute, BufferGeometry, DoubleSide, Group, Line, LineBasicMaterial } from 'three'
class axes {
    constructor(color = 0x000000, xLength = 2000, yLength = 2000, zLength = 2000) {
        const lines = [
            new Float32Array([  /* x-axis */
                -Math.abs(xLength), 0, 0,
                xLength, 0, 0
            ]),
            new Float32Array([  /* y-axis */
                0, -Math.abs(yLength), 0,
                0, yLength, 0
            ]),
            new Float32Array([  /* z-axis */
                0, 0, -Math.abs(zLength),
                0, 0, zLength
            ])
        ]

        const material = new LineBasicMaterial({ color: color, side: DoubleSide })

        const axes = lines.map(points => {
            const geometry = new BufferGeometry()
            geometry.setAttribute('position', new BufferAttribute(points, 3))
            return new Line(geometry, material)
        })

        this.group = new Group
        this.group.add(...axes)
    }
}
export default (new axes).group