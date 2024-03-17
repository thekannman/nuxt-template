<template>
  <div>
    <line-graph
      :data="chartData"
      :options="options"
      ref="chartRef"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Line } from "vue-chartjs";
export default defineComponent({
  name: 'LineChart',
  components: {LineGraph: Line,},
  props: {
    increase: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    let chartData = computed(() => {
      return ({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            borderColor: props.increase ? '#28C165' : '#F4574D',
            borderWidth: 1,
            fill: true,
            tension: 0.4,
            backgroundColor: function(context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null;
              }

              const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
              gradient.addColorStop(0, 'rgba(95, 223, 146, 0.5)');
              gradient.addColorStop(0.5, 'rgba(95, 223, 146, 0.25)');
              gradient.addColorStop(1, 'rgba(95, 223, 146, 0)');

              const gradient2 = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
              gradient2.addColorStop(0, 'rgba(255, 189, 189, 0.5)');
              gradient2.addColorStop(0.5, 'rgba(255, 189, 189, 0.25)');
              gradient2.addColorStop(1, 'rgba(255, 189, 189, 0)');

              return props.increase ? gradient : gradient2;
            },
            data: props.data,
          },
        ],
      });
    });
    let options = computed(() => {
      return ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.parsed.y}`;
              }
            }
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              drawBorder: false,
              color: 'rgba(0, 0, 0, 0)'
            }
          },
          x: {
            display: false,
            grid: {
              drawBorder: false,
              color: 'rgba(0, 0, 0, 0)'
            }
          }
        }
      });
    });
    return { options, chartData};
  },
});
</script>